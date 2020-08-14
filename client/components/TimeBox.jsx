import React from 'react'
import Countdown from 'react-countdown'

class TimeBox extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      duration: 60000 * 10
    }
  }
  timer = ({ minutes, seconds }) => {
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    return <span>{minutes}:{seconds}</span>
  }

  render () {
    return (
      <>
        <div className="timebox">
          <div id="time">
            <Countdown
              date={Date.now() + this.state.duration}
              renderer={this.timer}
              autoStart={true}/>
          </div>
        </div>
        <div className="time-buttons">
          <button>Start</button>
          <button>Stop</button>
        </div>
        <div>

        </div>
      </>
    )
  }
}

export default TimeBox
