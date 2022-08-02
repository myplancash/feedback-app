import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'
import Header from './components/header/header.component.jsx'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/feedback-list/feedback-list.component.jsx'
import FeedbackStats from './components/feedback-stats/feedback-stats.component'
import FeedbackForm from './components/feedback-form/feedback-form.component'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import About from './pages/about/about.component'
import AboutIconLink from './components/about-icon-link/about-icon-link.component.jsx'

import { FeedbackProvider } from "./context/FeedbackContext";



const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData || [])

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete it?'))
      setFeedback(feedback.filter((item) => item.id !== id))
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className='container'>
          <Routes>
              <Route exact path='/' element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList handleDelete={deleteFeedback} />
                </>
                }>
              </Route>
              <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <AboutIconLink />
        {/* explaning NavLink usage
          <Card>
            <NavLink to='/' activeClassName='active'>
              Home Page
            </NavLink>

            <NavLink to='/about' activeClassName='active'>
                About Page
            </NavLink>
        </Card> */}

      </Router>
    </FeedbackProvider>
  )
}

export default App
