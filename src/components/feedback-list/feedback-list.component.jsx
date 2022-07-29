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
      <AnimatePresence>
        {feedback &&
          feedback.map((item) => (
            <motion.div
              style={{ width: '100%' }}
              key={item.id}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: [null, 100, 0], opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 0.5 }}
              exit={{ x: 0, opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </motion.div>
          ))}
      </AnimatePresence>
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
