import React from 'react'

class ScoreBoard extends React.Component {
  constructor () {
    super()
    this.state = {
      scoreA: 0,
      scoreB: 0,
      periods: ['1st', '2nd', '3rd', '4th', 'OT', '2OT', '3OT', '4OT'],
      currentPointer: 0,
      toDisableBack: true,
      toDisableNext: false,
      currentPeriod: ''
    }
  }

  changeScoreA (num) {
    this.setState({
      scoreA: this.state.scoreA + num
    })
  }

  changeScoreB (num) {
    this.setState({
      scoreB: this.state.scoreB + num
    })
  }

  changeHandlerScoreA (e) {
    const val = +e.target.value
    if (val) {
      this.setState({
        scoreA: val
      })
    }
  }

  changeHandlerScoreB (e) {
    const val = +e.target.value
    if (val) {
      this.setState({
        scoreB: val
      })
    }
  }

  changePeriod (num) {
    console.log('Current Pointer:', this.state.currentPointer)
    this.setState({
      currentPeriod: this.state.periods[this.state.currentPointer + num],
      currentPointer: this.state.currentPointer + num,
      toDisableBack: this.checkIfFirst(),
      toDisableNext: this.checkIfLast()
    })
    console.log(this.checkIfFirst())
  }

  checkIfFirst () {
    if (this.state.currentPointer === 0) {
      return true
    } else {
      return false
    }
  }

  checkIfLast () {
    if (this.state.currentPointer === (this.state.periods.length - 1)) {
      return true
    } else {
      return false
    }
  }

  componentDidMount () {
    this.setState({
      currentPeriod: this.state.periods[0]
    })
  }

  render () {
    return (
      <div className="scoreboard">
        <h1>ScoreBoard</h1>
        <div className="score-container">
          <div>
            <h2>Team A</h2>
            <div className="team-a">
              <div className="minus-buttons">
                <button onClick={this.changeScoreA.bind(this, -1)}>-1</button>
                <button onClick={this.changeScoreA.bind(this, -2)}>-2</button>
                <button onClick={this.changeScoreA.bind(this, -3)}>-3</button>
              </div>
              {/* <div className="score-team">{this.state.scoreA}</div> */}
              <input className="score-team" value={this.state.scoreA} onChange={(e) => this.changeHandlerScoreA(e)} />
              <div className="add-buttons">
                <button onClick={this.changeScoreA.bind(this, 1)}>+1</button>
                <button onClick={this.changeScoreA.bind(this, 2)}>+2</button>
                <button onClick={this.changeScoreA.bind(this, 3)}>+3</button>
              </div>
            </div>
          </div>
          <div>
            <h1>Period</h1>
            <div className="period-container">
              <div className="period">{this.state.currentPeriod}</div>
              <div className="period-buttons">
                <button id="period-minus"
                  disabled={this.state.toDisableBack ? 1 : 0 }
                  onClick={this.changePeriod.bind(this, -1)}>Back</button>
                <button id="period-plus"
                  disabled={this.state.toDisableNext ? 1 : 0 }
                  onClick={this.changePeriod.bind(this, 1)}>Next</button>
              </div>
            </div>
          </div>
          <div>
            <h2>Team B</h2>
            <div className="team-a">
              <div className="minus-buttons">
                <button onClick={this.changeScoreB.bind(this, -1)}>-1</button>
                <button onClick={this.changeScoreB.bind(this, -2)}>-2</button>
                <button onClick={this.changeScoreB.bind(this, -3)}>-3</button>
              </div>
              {/* <div className="score-team">{this.state.scoreB}</div> */}
              <input className="score-team" value={this.state.scoreB} onChange={this.changeHandlerScoreB.bind(this)} />
              <div className="add-buttons">
                <button onClick={this.changeScoreB.bind(this, 1)}>+1</button>
                <button onClick={this.changeScoreB.bind(this, 2)}>+2</button>
                <button onClick={this.changeScoreB.bind(this, 3)}>+3</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className>

        </div> */}
      </div>
    )
  }
}

export default ScoreBoard
