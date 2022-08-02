import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Header = ({ text }) => {
  return (
    <header>
      <div className='container'>
        <h1>
          <Link to='/'>
            {text}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header
