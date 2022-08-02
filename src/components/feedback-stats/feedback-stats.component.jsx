import { FeedbackStatsDiv } from './feedback-stats.styles'

import React, { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)

  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <FeedbackStatsDiv>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </FeedbackStatsDiv>
  )
}
/*
FeedbackList.propType = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropType.number.isRequired,
      text: PropType.string.isRequired,
      rating: PropType.number,isRequired
    })
  )
} */


export default FeedbackStats
