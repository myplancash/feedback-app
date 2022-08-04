import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";
import { FaPenFancy } from 'react-icons/fa'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

  const [ feedback, setFeedback ] = useState([
    {
      id: 1,
      text: 'This Feedback its from FeedbackContext Provider item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This Feedback its from FeedbackContext Provider item 2',
      rating: 9
    },
    {
      id: 3,
      text: 'This Feedback its from FeedbackContext Provider item 3',
      rating: 8
    }
  ])

  const [ feedbackEdit, setFeedbackEdit ] = useState({
    item: {},
    edit: false,
  })

  // delete feedback item by filter comparisson
  const deleteFeedback = (id) => {
  if (window.confirm('Are you sure you want to delete it?'))
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  // add Feedback item by es6's way of spreading values, and add a new id to the new one.
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  // set item to be updated
  const handleFeedbackEdit = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updateItem) => {
    console.log(id, updateItem)
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updateItem} : item) )
  }


  const value = {
    feedback,
    feedbackEdit,

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
