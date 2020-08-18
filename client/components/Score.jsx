import React from 'react'

const Score = (props) => {
  return (
    <>
      <h2 className="team-name">{props.teamName}</h2>
      <div className={props.cssTeam}>
        {props.invertB
          ? <>
              <div className="add-buttons col-half">
                <div className="score-buttons" onClick={props.plus1}>1</div>
                <div className="score-buttons" onClick={props.plus2}>2</div>
                <div className="score-buttons" onClick={props.plus3}>3</div>
              </div>
              <div className="col-half"></div>
              <div className="score-team col-11">{props.score}</div>
              <div className="col-half"></div>
              <div className="minus-buttons col-half">
                <div className="score-buttons" onClick={props.minus1}>1</div>
                <div className="score-buttons" onClick={props.minus2}>2</div>
                <div className="score-buttons" onClick={props.minus3}>3</div>
              </div>
            </>
          : <>
              <div className="minus-buttons col-half">
                <div className="score-buttons" onClick={props.minus1}>1</div>
                <div className="score-buttons" onClick={props.minus2}>2</div>
                <div className="score-buttons" onClick={props.minus3}>3</div>
              </div>
              <div className="col-half"></div>
              <div className="score-team col-11">{props.score}</div>
              <div className="col-half"></div>
              <div className="add-buttons col-half">
                <div className="score-buttons" onClick={props.plus1}>1</div>
                <div className="score-buttons" onClick={props.plus2}>2</div>
                <div className="score-buttons" onClick={props.plus3}>3</div>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default Score
