// import React from 'react'
// import Countdown, {
//   CountdownApi,
//   CountdownTimeDelta as countdownTimeDelta
// } from 'react-countdown'

// class TimeBox extends React.PureComponent {
//   state = {
//     duration: 60000 * 10
//   }

//   handleStartClick = () => {
//     this.countdownApi && this.countdownApi.start()
//   }

//   handlePauseClick = () => {
//     this.countdownApi && this.countdownApi.pause()
//   }

//   handleResetClick = () => {
//     this.setState({ duration: Date.now() + this.state.duration })
//   }

//   handleUpdate = () => {
//     this.countdownApi.pause()
//     this.forceUpdate()
//   }

//   handlePause = ({ seconds } = countdownTimeDelta) => {
//     this.forceUpdate()
//   }

//   setRef = (countdown = Countdown | null) => {
//     if (countdown) {
//       this.countdownApi = countdown.getApi()
//     }
//   }

//   isPaused = () => {
//     return !!(this.countdownApi && this.countdownApi.isPaused())
//   }

//   isCompleted = () => {
//     return !!(this.countdownApi && this.countdownApi.isCompleted())
//   }

//   timer = ({ minutes, seconds }) => {
//     if (minutes < 10) {
//       minutes = '0' + minutes
//     }
//     if (seconds < 10) {
//       seconds = '0' + seconds
//     }
//     return <span>{minutes}:{seconds}</span>
//   }

//   render () {
//     return (
//       <>
//         <div className="timebox">
//           <div id="time">
//             <Countdown
//               key={this.state.duration}
//               ref={this.setRef}
//               date={Date.now() + this.state.duration}
//               onMount={this.handleUpdate}
//               onStart={this.handleUpdate}
//               onPause={this.handlePause}
//               onComplete={this.handleUpdate}
//               autoStart={true}
//               renderer={this.timer}
//             />
//           </div>
//         </div>
//         <div className="time-buttons">
//           <button onClick={this.handleStartClick}>Start</button>
//           <button onClick={this.handlePauseClick}>Pause</button>
//         </div>
//         <div>

//         </div>
//       </>
//     )
//   }
// }

// export default TimeBox

import React from 'react'
// import ReactDOM from 'react-dom'

import Countdown from 'react-countdown'

class TimeBox extends React.PureComponent {
  countdownApi = null
  state = { duration: Date.now() + (60000 * 10) }

  handleStartClick = () => {
    this.countdownApi && this.countdownApi.start()
  }

  handlePauseClick = () => {
    this.countdownApi && this.countdownApi.pause()
  }

  handleResetClick = () => {
    this.setState({ duration: Date.now() + (60000 * 10) })
  }

  handleUpdate = () => {
    this.forceUpdate()
  }

  handlePause = ({ seconds }) => {
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
            onClick={this.handleStartClick}
            disabled={!this.isPaused() || this.isCompleted()}
          >
            Start
          </button>{' '}
          <button
            type="button"
            onClick={this.handlePauseClick}
            disabled={this.isPaused() || this.isCompleted()}
          >
            Pause
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
