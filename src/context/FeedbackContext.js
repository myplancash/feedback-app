import { createContext, useState } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Feedback from Feddback Provider Context',
      rating: 10,
    }
  ])

  return <FeedbackContext value={{
    feedback
  }}>
    {children}
  </FeedbackContext>
}

export default FeedbackContext;