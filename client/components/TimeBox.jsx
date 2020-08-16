import React from 'react'
import Countdown from 'react-countdown'

class TimeBox extends React.PureComponent {
  countdownApi = null
  state = {
    duration: Date.now() + (60000 * 10),
    timerStopped: true
  }

  handleStartClick = () => {
    this.setState({
      timerStopped: false
    })
    this.countdownApi && this.countdownApi.start()
  }

  handlePauseClick = () => {
    this.setState({
      timerStopped: true
    })
    this.countdownApi && this.countdownApi.pause()
  }

  handleResetClick = () => {
    this.setState({
      timerStopped: true
    })
    this.setState({ duration: Date.now() + (60000 * 10) })
  }

  handleUpdate = () => {
    this.forceUpdate()
  }

  handlePause = ({ seconds }) => {
    this.setState({
      timerStopped: true
    })
    this.forceUpdate()
  }

  setRef = countdown => {
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
              key={this.state.duration}
              ref={this.setRef}
              date={this.state.duration}
              onMount={this.handleUpdate}
              onStart={this.handleUpdate}
              onPause={this.handlePause}
              onComplete={this.handleUpdate}
              autoStart={false}
              renderer={this.timer}
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={this.state.timerStopped ? this.handleStartClick : this.handlePauseClick }
          >
            Start / Stop
          </button>{' '}
          <button type="button" onClick={this.handleResetClick}>
            Reset
          </button>
        </div>
      </>
    )
  }
}

export default TimeBox
