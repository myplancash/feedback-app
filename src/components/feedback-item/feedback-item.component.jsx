import Card from '../shared/card/card.component'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const { id, rating, text } = item
  const { deleteFeedback, handleFeedbackEdit } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button className='edit' onClick={() => handleFeedbackEdit(item)}>
        <FaEdit color="RebeccaPurple" />
      </button>
      <button className='close' onClick={() => deleteFeedback(id)}>
        <FaTimes color='crimson' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>

  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
