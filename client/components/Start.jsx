import React from 'react'
import { Link } from 'react-router-dom'

class Start extends React.Component {
  state = {
    teamA: 'TEAM A',
    teamB: 'TEAM B',
    length: 10
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

  render () {
    return (
      <>
        <h1>BASKETBALL SCOREBOARD APP</h1>
        <div className="start-box col-5">
          <p className="propmt">Please enter the required details</p>
          <div className="details col-12">
            <p>
              Team A: <input onChange={(e) => this.handleNameChangeA(e)} placeholder="TEAM A" required></input>
            </p>
            <p>
              Team B: <input onChange={(e) => this.handleNameChangeB(e)} placeholder="TEAM B" required></input>
            </p>

            <Link to={{
              pathname: '/scoreboard',
              state: {
                teamA: this.state.teamA,
                teamB: this.state.teamB,
                length: this.state.length
              }
            }}>
              <div className="submit col-5">Submit</div>
            </Link>
          </div>

        </div>
      </>
    )
  }
}

export default Start
