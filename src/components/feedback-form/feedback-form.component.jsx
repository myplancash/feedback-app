import React, { useState } from 'react'
import { CardContainer } from './feedback-form.styles'
import Button from '../shared/button/button.component'
import RatingSelect from '../rating-select/rating-select.component'


const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('You must enter a comment with more than 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      //create an object with the text an rating
      const newFeedback = {
        text,
        rating,
      }

      handleAdd(newFeedback)
      setText('')
    }
  }

  return (
    <CardContainer>
      <form onSubmit={handleSubmit}>
        <h1>How would you rate your service with us?</h1>
        {/* rating select component */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            onChange={handleTextChange}
            value={text}
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </CardContainer>
  )
}

export default FeedbackForm
