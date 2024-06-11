import React, { useState } from 'react'
import randomizer from '../../utils/randomizer.js'

const Random = ({ min, max }) => {
  const [num, setNum] = useState(randomizer())

  const handleClick = () => {
    setNum(randomizer(min, max))
  }

  return (
    <>
      <h2 className="random-descrition">{num}</h2>
      <button className="random-btn" onClick={handleClick}>
        Generate Random Number
      </button>
    </>
  )
}

export default Random
