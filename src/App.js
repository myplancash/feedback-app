import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'
import Header from './components/header/header.component.jsx'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/feedback-list/feedback-list.component.jsx'
import FeedbackStats from './components/feedback-stats/feedback-stats.component'
import FeedbackForm from './components/feedback-form/feedback-form.component'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData || [])

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete it?'))
      setFeedback(feedback.filter((item) => item.id !== id))
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
