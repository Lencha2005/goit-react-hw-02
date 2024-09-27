import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem('saved-reviews');
    if (savedReviews !== null){
      return JSON.parse(savedReviews)
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  const updateFeedback = (feedbackType) => {
    setReviews({...reviews, [feedbackType]: reviews[feedbackType] + 1});
  }

  const resetFeedback =() => {
    setReviews({
      good: 0,
    neutral: 0,
    bad: 0
    })
  }

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positivFeedbackStatistics = Math.round((reviews.good / totalFeedback) * 100);

useEffect(() => {
  window.localStorage.setItem('saved-reviews', JSON.stringify(reviews));
}, [reviews])

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}/>
      {totalFeedback 
      ? <Feedback reviews={reviews} totalFeedback={totalFeedback} positivFeedbackStatistics={positivFeedbackStatistics}/> 
      : <Notification/>}
      
    </>
  )
}

export default App
