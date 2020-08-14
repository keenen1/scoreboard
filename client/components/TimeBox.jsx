import React from 'react'

class TimeBox extends React.Component {
  constructor () {
    super()
    this.state = {
      display: document.querySelector('#time').textContent,
      minutes: 60 * 10
    }
  }

  startTimer = (duration, display) => {
    let timer = duration
    var minutes
    var seconds

    function timer () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)

      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds

      display = minutes + ':' + seconds

      if (--timer < 0) {
        timer = duration
      }
    }
    timer()
    setInterval()
  }

  componentDidMount () {
    window.onload = function () {
      var fiveMinutes = 60 * 5
      var display = document.querySelector('#time')
      this.startTimer(fiveMinutes, display)
    }
  }

  render () {
    return (
      <>
        <div className="timebox">
          <div id="time">10:00</div>
        </div>
        <div className="time-buttons">
          <button
            // onClick={this.startTimer(this.state.minutes, this.state.display)}
          >Start</button>
          <button>Stop</button>
        </div>
        <div>

        </div>
      </>
    )
  }
}

export default TimeBox
