import React from 'react'

const Possession = (props) => {
  const checkPossLeft = () => {
    return props.possLeft ? 'red' : 'grey'
  }

  const checkPossRight = () => {
    return props.possRight ? 'red' : 'grey'
  }

  let leftStyle = {
    backgroundColor: checkPossLeft()
  }

  let rightStyle = {
    backgroundColor: checkPossRight()
  }

  return (
    <>
      <div className="possession-container">
        <div className="poss-left" style={leftStyle}></div>
        <div className="poss-label">POSS</div>
        <div className="poss-right" style={rightStyle}></div>
      </div>
      <div className="arrows">
        <div className="arrow-left" onClick={props.changePossLeft}>⇦</div>
        <div className="arrow-right" onClick={props.changePossRight}>⇨</div>
      </div>
    </>
  )
}

export default Possession
