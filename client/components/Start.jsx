import React from 'react'
import { Link } from 'react-router-dom'

class Start extends React.Component {
  state = {
    teamA: 'TEAM A',
    teamB: 'TEAM B',
    length: 12,
    overtime: 5
  }

  handleNameChangeA = (event) => {
    const value = event.target.value
    if (value) {
      this.setState({
        teamA: value
      })
    }
  }

  handleNameChangeB = (event) => {
    const value = event.target.value
    if (value) {
      this.setState({
        teamB: value
      })
    }
  }

  handleLengthChange = (event) => {
    this.setState({
      length: event.target.value
    })
  }

  handleOTChange = (event) => {
    this.setState({
      overtime: event.target.value
    })
  }

  render () {
    return (
      <div className="start-page">
        <h1 className="title">LEYZ SCOREBOARD</h1>
        <div className="start-box col-5">
          <p className="prompt">Please enter the game details</p>
          <div className="details col-12">
            <p>
              Team A: <input onChange={(e) => this.handleNameChangeA(e)} placeholder="TEAM A" required></input>
            </p>
            <p>
              Team B: <input onChange={(e) => this.handleNameChangeB(e)} placeholder="TEAM B" required></input>
            </p>

            <p>
              Length:  <select id="time-length" onChange={this.handleLengthChange} value={this.state.length}>
                <option value={Number(12)}>12 Minutes</option>
                <option value={Number(10)}>10 Minutes</option>
                <option value={Number(8)}>8 Minutes</option>
                <option value={Number(5)}>5 Minutes</option>
              </select>
            </p>

            <p>
              Overtime:  <select id="ot-length" onChange={this.handleOTChange} value={this.state.overtime}>
                <option value={Number(5)}>5 Minutes</option>
                <option value={Number(4)}>4 Minutes</option>
                <option value={Number(3)}>3 Minutes</option>
                <option value={Number(2)}>2 Minutes</option>
              </select>
            </p>

            <Link
              to={{
                pathname: '/scoreboard',
                state: {
                  teamA: this.state.teamA,
                  teamB: this.state.teamB,
                  length: this.state.length,
                  overtime: this.state.overtime
                }
              }}
              replace
            >
              <div className="submit col-5">Submit</div>
            </Link>
          </div>
        </div>
        <span className="creator">Powered by: LeyZ™</span>
      </div>
    )
  }
}

export default Start
