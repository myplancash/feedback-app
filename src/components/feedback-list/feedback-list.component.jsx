import FeedbackItem from '../feedback-item/feedback-item.component'
import PropTypes from 'prop-types'

import { FeedbackListDiv, NoFeedback } from './feedback-list.styles'
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return (
      <NoFeedback>
        <p>No feedback yet</p>
      </NoFeedback>
    )
  }

  return (
    <FeedbackListDiv>
      {feedback &&
        feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
    </FeedbackListDiv>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList
