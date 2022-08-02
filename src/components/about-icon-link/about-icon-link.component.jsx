import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AboutLink } from './about-icon-link.styles';
import {useNavigate} from 'react-router-dom';

const AboutIconLink = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('useNavigate activated')
    return navigate('/about');
  }

  return (
    <AboutLink>
      <Link to={{
        pathname: '/',
        // search: '?sort=name',
        // hash: '#hello',
      }}>
        <FaQuestion size='30' />
      </Link>
      <button type='button' onClick={handleClick}>Navigate to About page</button>
    </AboutLink>
   );
}

export default AboutIconLink;