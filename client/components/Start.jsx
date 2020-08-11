import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <>
      <div className="start">START YOUR</div>
      <div>OWN LEAGUE</div>
      <Link to="/login">
        <div>NOW</div>
      </Link>
    </>
  )
}

export default Start
