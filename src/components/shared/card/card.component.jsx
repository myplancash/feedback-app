import React from 'react'
import PropTypes from 'prop-types'
import { CardContainer } from './card.styles'

const Card = ({ children, reverse }) => {
  return (
    <CardContainer
      // className={`${reverse && 'reverse'} card`}
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fafafa',
        color: reverse ? 'white' : '#333',
      }}
    >
      {children}
    </CardContainer>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
