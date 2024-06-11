import Random from './components/statefull_components/Random'
import Counter from './components/stateless_components/Counter'
import Button from './components/stateless_components/Button'
import { useState } from 'react'
import './index.css'

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <div className="randomizer-container">
        <Random className="randomizer" min={100} max={200} />
      </div>

      <div className="counter-container">
        <Counter count={count} className="counter-title" />
        <Button onClick={incrementCount} type="button" className="counter-btn" text="Increment" />
      </div>
    </div>
  )
}

export default App
