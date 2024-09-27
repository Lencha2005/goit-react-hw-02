import React from 'react';
import styles from './Feedback.module.css'

const Feedback = ({reviews, totalFeedback, positivFeedbackStatistics}) => {
  return (
    <ul className={styles.list}>
        <li>Good: {reviews.good}</li>
        <li>Neutral: {reviews.neutral}</li>
        <li>Bad: {reviews.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positiv: {positivFeedbackStatistics}%</li>
    </ul>
  )
}

export default Feedback