import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
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
const Statics = ({bad, good, neutral}) => {
  
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h1>Statics </h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
   <div>
     <h1>Statics </h1>
      <table>
        <tbody>
        <tr>
          <td>
            Good
          </td>
          <td>
            {good}
          </td>
        </tr>
        <tr>
          <td>
            Neutral
          </td>
          <td>
            {neutral}
          </td>
        </tr>
        <tr>
          <td>
            Bad
          </td>
          <td>
            {bad}
          </td>
        </tr>
        <tr>
          <td>
            All
          </td>
          <td>
            {bad+neutral+good}
          </td>
        </tr>
        <tr>
          <td>
            Average
          </td>
          <td>
            {(bad*-1+good+neutral*0 )/(bad+neutral+good)}
          </td>
        </tr>
        <tr>
          <td>
            Positive
          </td>
          <td>
            {(good)/(bad+neutral+good)} %
          </td>
        </tr>
        </tbody>
      </table>
      
    </div>
  )

}
  
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
 
const Display = (props) =>{
  return(
  <div>
    {props.anecdotes[props.selected]}
  </div>)
}

const App = ({anecdotes}) => {
  const course = 'Give feedback'
  const points = { 0: 1, 1: 3, 2: 4, 3: 2 }
 
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
      <Statics bad={bad} good={good} neutral={neutral}/>
      </div>
  )
}

ReactDOM.render(<App  anecdotes={anecdotes} />, document.getElementById('root'))