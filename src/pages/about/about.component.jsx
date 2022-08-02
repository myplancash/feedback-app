import './about.styles.jsx'
import { Link, useParams } from "react-router-dom";
import Card from '../../components/shared/card/card.component.jsx'

const About = () => {

  const params = useParams();

  return (
    <Card>
      <div className="about">
        <h1>About this Feedback App</h1>
          <p>This is a react app to leave feedback for a product or service</p>
          <p>Version 1.0.0</p>

          <Link to="/">Back to home</Link>
          <h1> the Post id is: {params.id} </h1>
      </div>
    </Card>
  )
}

export default About
