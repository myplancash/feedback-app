import { SpinnerImg } from './spinner.styles';
import spinner from "../../assets/spinner.gif";

const Spinner = () => {
  return <SpinnerImg src={spinner} alt="loading..." />;
}

export default Spinner;