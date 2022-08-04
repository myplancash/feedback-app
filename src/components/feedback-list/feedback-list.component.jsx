import FeedbackItem from '../feedback-item/feedback-item.component'

import { FeedbackListDiv, NoFeedback } from './feedback-list.styles'
import { motion, AnimatePresence } from 'framer-motion'

import FeedbackContext from '../../context/FeedbackContext';
import { useContext } from 'react';



const FeedbackList = () => {
  // extract our feedback from our feedbackContext by using useContext hook
  const { feedback } = useContext(FeedbackContext)



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
              exit={{ x: [null, -100, 0], opacity: 0 }}
              layout
            >
              <FeedbackItem
                key={item.id}
                item={item}
              />
            </motion.div>
          ))}
      </AnimatePresence>
    </FeedbackListDiv>
  )
}



export default FeedbackList
