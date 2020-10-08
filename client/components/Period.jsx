import React from 'react'

const Period = (props) => {
  return (
    <>
      <div className="period-container">
        <h1 className="period-title">PERIOD</h1>
        <div className="period">
          <span className="period-text">{props.period}</span>
        </div>
        <div className="period-buttons">
          <div className="period-minus"
            disabled={props.backButton ? 1 : 0 }
            onClick={props.backPeriod}>Back</div>
          <div className="period-plus"
            disabled={props.nextButton ? 1 : 0 }
            onClick={props.nextPeriod}>Next</div>
        </div>
      </div>
    </>
  )
}

export default Period
