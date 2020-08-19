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

  toggleStartStopText = () => {
    if (this.state.timerStopped) {
      return 'START'
    } else {
      return 'STOP'
    }
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

  componentDidMount () {
    this.setState({
      duration: Date.now() + (60000 * 10),
      timerStopped: true
    })
  }

  render () {
    return (
      <>
        <div className="col-1">
          <div className="reset-button" onClick={this.handleResetClick}>
            <p>R</p>
            <p>E</p>
            <p>S</p>
            <p>E</p>
            <p>T</p>
          </div>
        </div>
        <div className="timebox-container col-9">
          <div className="timebox">
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
          <div className="start-stop-button col-8"
            onClick={ this.state.timerStopped ? this.handleStartClick : this.handlePauseClick }
            style={ this.state.timerStopped ? { backgroundColor: '#006200' } : { backgroundColor: '#850000' } }
          >
            {this.toggleStartStopText()}
          </div>
        </div>
        <div className="col-1">
          {/* Plus and Minus Time */}
        </div>
      </>
    )
  }
}

export default TimeBox
