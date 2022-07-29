import PropTypes from 'prop-types'
import './button.styles'

const Button = ({ children, version, type, isDisabled }) => {
  const handleButton = (e) => {}

  return (
    <button
      type={type}
      onClick={handleButton}
      disabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button
