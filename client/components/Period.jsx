import React from 'react'

const Period = (props) => {
  return (
    <>
      <div className="period-container">
        <h1>Period</h1>
        <div className="period">{props.period}</div>
        <div className="period-buttons">
          <button id="period-minus"
            disabled={props.backButton ? 1 : 0 }
            onClick={props.backPeriod}>Back</button>
          <button id="period-plus"
            disabled={props.nextButton ? 1 : 0 }
            onClick={props.nextPeriod}>Next</button>
        </div>
      </div>
    </>
  )
}

export default Period
