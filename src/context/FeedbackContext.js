import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

  const [ feedback, setFeedback ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ feedbackEdit, setFeedbackEdit ] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await fetch(`/feedback?_sort=id&_order=desc`)
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false)
    }
    fetchFeedback();
  }, [])

  // delete feedback item by filter comparisson
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete it?')) {
      fetch(`/feedback/${id}`, {method: "DELETE"})
    }
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  // add Feedback item by es6's way of spreading values, and add a new id to the new one.

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json();
    setFeedback([data, ...feedback])
  }

  // set item to be updated
  const handleFeedbackEdit = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      //since we are setting json data so we need to set our headers
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateItem)
    })
    const data = await response.json();

    setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item) )
    console.log(id, data)
  }


  const value = {
    feedback,
    feedbackEdit,
    isLoading,

    deleteFeedback,
    addFeedback,
    handleFeedbackEdit,
    updateFeedback
  }

  return <FeedbackContext.Provider value={value}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;
