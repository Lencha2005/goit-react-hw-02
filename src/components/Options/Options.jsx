import React from 'react';
import styles from './Options.module.css';

const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
  return (
    <div className={styles.wrap}>
        <button className={styles.btn} type='button' onClick={() => updateFeedback('good')}>Good</button>
        <button className={styles.btn} type='button' onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button className={styles.btn} type='button' onClick={() => updateFeedback('bad')}>Bad</button>
        {totalFeedback ? <button className={styles.btn} type='button' onClick={()=> resetFeedback()}>Reset</button> : null}
    </div>
  )
}

export default Options