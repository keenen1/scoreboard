import React from 'react'
import Countdown, {
  // CountdownApi as countdownApi,
  CountdownTimeDelta as countdownTimeDelta
} from 'react-countdown'

class TimeBox extends React.PureComponent {
  // constructor () {
  //   super()
  //   this.state = {
  //     duration: 60000 * 10
  //   }
  // }

  state = {
    duration: 60000 * 10
  }

  handleStartClick = () => {
    this.countdownApi && this.countdownApi.start()
  }

  handlePauseClick = () => {
    this.countdownApi && this.countdownApi.pause()
  }

  handleResetClick = () => {
    this.setState({ date: Date.now() + this.state.duration })
  }

  handleUpdate = () => {
    this.forceUpdate()
  }

  handlePause = ({ seconds } = countdownTimeDelta) => {
    this.forceUpdate()
  }

  setRef = (countdown = Countdown | null) => {
    if (countdown) {
      this.countdownApi = countdown.getApi()
    }
  }

  isPaused = () => {
    return !!(this.countdownApi && this.countdownApi.isPaused())
  }

  isCompleted = () => {
    return !!(this.countdownApi && this.countdownApi.isCompleted())
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
              key={this.state.date}
              ref={this.setRef}
              date={Date.now() + this.state.duration}
              onMount={this.handleUpdate}
              onStart={this.handleUpdate}
              onPause={this.handlePause}
              onComplete={this.handleUpdate}
              autoStart={true}
              renderer={this.timer}
            />
          </div>
        </div>
        <div className="time-buttons">
          <button onClick={this.handleStartClick}>Start</button>
          <button onClick={this.handlePauseClick}>Pause</button>
        </div>
        <div>

        </div>
      </>
    )
  }
}

export default TimeBox
