import { FeedbackStatsDiv } from './feedback-stats.styles'
import PropTypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {
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

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats
