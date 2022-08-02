import Card from '../shared/card/card.component'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ item, handleDelete }) => {
  const { id, rating, text } = item

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => handleDelete(id)}>
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
