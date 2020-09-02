import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return(<div>
    <h1>{props.course} </h1>
  </div>)
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = () => {
  const course = 'Give feedback'
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }


  return (
    <div>
      <Header course = {course}/>
      <Button onClick={handleGoodClick} text='God' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))