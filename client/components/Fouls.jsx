import React from 'react'

class Fouls extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      teamA: props.teamA,
      fouls: []
    }
  }

  changeColour = (foul) => {

  }

  activateFouls = (foulNum) => {
    let updatedFouls = []
    this.state.fouls.map(foul => {
      let foulName = `${Object.keys(foul)}`
      if (foulNum !== 0) {
        foul[foulName] = true
        --foulNum
      } else {
        foul[foulName] = false
      }
      updatedFouls.push(foul)
    })
    this.setState({
      fouls: updatedFouls
    })
    console.log(this.state.fouls[0])
  }

  componentDidMount () {
    this.setState({
      fouls: [
        { foul1: false },
        { foul2: false },
        { foul3: false },
        { foul4: false },
        { foul5: false }
      ]
    })
  }

  render () {
    return (
      <>
        <div className="team-fouls col-12">
          {this.state.teamA
            ? <div className="left-fouls col-12">
              <div className="left-foul-1" onClick={this.activateFouls.bind(this, 1)}
              // style={{ this.state.fouls[0] ? backgroundColor: '#850000' } }
              ></div>
              <div className="left-foul-2" onClick={this.activateFouls.bind(this, 2)}></div>
              <div className="left-foul-3" onClick={this.activateFouls.bind(this, 3)}></div>
              <div className="left-foul-4" onClick={this.activateFouls.bind(this, 4)}></div>
              <div className="left-foul-5" onClick={this.activateFouls.bind(this, 5)}></div>
            </div>
            : <div className="right-fouls col-12">
              <div className="right-foul-5" onClick={this.activateFouls.bind(this, 5)}></div>
              <div className="right-foul-4" onClick={this.activateFouls.bind(this, 4)}></div>
              <div className="right-foul-3" onClick={this.activateFouls.bind(this, 3)}></div>
              <div className="right-foul-2" onClick={this.activateFouls.bind(this, 2)}></div>
              <div className="right-foul-1" onClick={this.activateFouls.bind(this, 1)} style={{ backgroundColor: '#850000' } }></div>
            </div>
          }
        </div>
      </>
    )
  }
}

export default Fouls
