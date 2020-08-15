import React from 'react'

const Score = (props) => {
  return (
    <div>
      <h2 className="team-name">{props.teamName}</h2>
      <div className={props.cssTeam}>
        {props.invertB
          ? <>
              <div className="add-buttons">
                <button className="score-buttons" onClick={props.plus1}>1</button>
                <button className="score-buttons" onClick={props.plus2}>2</button>
                <button className="score-buttons" onClick={props.plus3}>3</button>
              </div>
              <div className="score-team">{props.score}</div>
              <div className="minus-buttons">
                <button className="score-buttons" onClick={props.minus1}>1</button>
                <button className="score-buttons" onClick={props.minus2}>2</button>
                <button className="score-buttons" onClick={props.minus3}>3</button>
              </div>
            </>
          : <>
              <div className="minus-buttons">
                <button className="score-buttons" onClick={props.minus1}>1</button>
                <button className="score-buttons" onClick={props.minus2}>2</button>
                <button className="score-buttons" onClick={props.minus3}>3</button>
              </div>
              <div className="score-team">{props.score}</div>
              <div className="add-buttons">
                <button className="score-buttons" onClick={props.plus1}>1</button>
                <button className="score-buttons" onClick={props.plus2}>2</button>
                <button className="score-buttons" onClick={props.plus3}>3</button>
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default Score
