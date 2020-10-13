import React from 'react'
import Countdown from 'react-countdown'

class TimeBox extends React.PureComponent {
  countdownApi = null
  constructor (props) {
    super(props)
    this.state = {
      duration: Date.now() + (60000 * 10),
      // minutes: props.minutes || 10,
      timerStopped: true
    }
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
      timerStopped: true,
      duration: Date.now() + (60000 * this.props.minutes)
    })
  }

  handleOvertimeClick = () => {
    this.setState({
      timerStopped: true,
      duration: Date.now() + (60000 * this.props.overtime)
    })
  }

  handleTimeChange = (time) => {
    this.handlePauseClick()
    this.setState({
      duration: this.state.duration + (time)
    })
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

  timer = ({ minutes, seconds, milliseconds }) => {
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    if (milliseconds < 10) {
      milliseconds = '0' + milliseconds
    }
    return <span>{minutes}:{seconds}</span>
  }

  componentDidMount () {
    this.setState({
      duration: Date.now() + (60000 * this.props.minutes),
      timerStopped: true
    })
  }

  render () {
    return (
      <>
        <div className="reset col-1">
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
              precision={2}
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
        <div className="overtime col-1">
          <div className="ot-button" onClick={this.handleOvertimeClick}>
            <div>O</div>
            <div>V</div>
            <div>E</div>
            <div>R</div>
            <div>T</div>
            <div>I</div>
            <div>M</div>
            <div>E</div>
          </div>
        </div>
        {/* <div className="plus-minus-time col-1">
          <div className="plus-time">
            <div className="plus-30" onClick={this.handleTimeChange.bind(this, 30000)}>30</div>
            <div className="plus-10" onClick={this.handleTimeChange.bind(this, 10000)}>10</div>
            <div className="plus-1" onClick={this.handleTimeChange.bind(this, 1000)}>1</div>
          </div>
          <div className="minus-1" onClick={this.handleTimeChange.bind(this, -1000)}>1</div>
        </div> */}
      </>
    )
  }
}

export default TimeBox
