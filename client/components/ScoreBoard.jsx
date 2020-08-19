import React from 'react'

import Period from './Period'
import Possession from './Possession'
import TimeBox from './TimeBox'
import Score from './Score'
import Fouls from './Fouls'

class ScoreBoard extends React.Component {
  constructor () {
    super()
    this.state = {
      teamA: 'AZTIGS',
      teamB: 'WEST',
      scoreA: 0,
      scoreB: 0,
      periods: ['1st', '2nd', '3rd', '4th', 'OT', '2OT', '3OT', '4OT'],
      currentPointer: 0,
      toDisableBack: true,
      toDisableNext: false,
      currentPeriod: '',
      possLeft: false,
      possRight: false
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

  changePossession (possA) {
    if (possA === 'possLeft') {
      this.setState({
        possLeft: true,
        possRight: false
      })
    } else if (possA === 'possRight') {
      this.setState({
        possLeft: false,
        possRight: true
      })
    }
  }

  changePeriod (num) {
    this.setState({
      currentPeriod: this.state.periods[this.state.currentPointer + num],
      currentPointer: this.state.currentPointer + num,
      toDisableBack: this.checkIfFirst(),
      toDisableNext: this.checkIfLast()
    })
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
      <>
        <h1>BASKETBALL SCOREBOARD</h1>

        <div className="top-container col-12">
          <div className="top-left col-5">
            <Score invertB={false} teamName={this.state.teamA} cssTeam={'team-a'} score={this.state.scoreA} minus1={this.changeScoreA.bind(this, -1)} minus2={this.changeScoreA.bind(this, -2)} minus3={this.changeScoreA.bind(this, -3)} plus1={this.changeScoreA.bind(this, 1)} plus2={this.changeScoreA.bind(this, 2)} plus3={this.changeScoreA.bind(this, 3)} />
          </div>
          <div className="top-middle col-2">
            <Period period={this.state.currentPeriod} backButton={this.toDisableBack} nextButton={this.toDisableNext} backPeriod={this.changePeriod.bind(this, -1)} nextPeriod={this.changePeriod.bind(this, 1)} />
            <Possession possLeft={this.state.possLeft} possRight={this.state.possRight} changePossLeft={this.changePossession.bind(this, 'possLeft')} changePossRight={this.changePossession.bind(this, 'possRight')} />
          </div>
          <div className="top-right col-5">
            <Score invertB={true} teamName={this.state.teamB} cssTeam={'team-b'} score={this.state.scoreB} minus1={this.changeScoreB.bind(this, -1)} minus2={this.changeScoreB.bind(this, -2)} minus3={this.changeScoreB.bind(this, -3)} plus1={this.changeScoreB.bind(this, 1)} plus2={this.changeScoreB.bind(this, 2)} plus3={this.changeScoreB.bind(this, 3)} />
          </div>
        </div>

        <div className="bottom-container col-12">
          <div className="bottom-left col-3">
            <Fouls teamA={true} />
          </div>
          <div className="bottom-middle col-5">
            <TimeBox />
          </div>
          <div teamA={false} className="bottom-left col-3">
            <Fouls />
            <div className="creator">
              <span>Powered by: LeyZ™</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ScoreBoard
