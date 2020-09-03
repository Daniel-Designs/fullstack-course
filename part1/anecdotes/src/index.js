import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
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
const MostVotes = (props) =>{
  let most = props.votes[0]
  let selected = 0
  
  for(var i=0;i<=5;i++){ 
    if (props.votes[i]>most){
      most=props.votes[i]
      selected = i
    }
  }

  return(
    <div>
    {props.anecdotes[selected]}
  </div>
  )
}

const App = ({anecdotes}) => {
 
  //const points = { 0: 1, 1: 3, 2: 4, 3: 2, 4:0, 5:0 }
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4:0, 5:0 })
  const handleSelectedClick = () =>{
    setSelected(getRandomArbitrary(0,6))
  }

  const handlePoints = () =>{
    const copy = { ...votes }
    copy[selected] += 1 
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display anecdotes= {anecdotes} selected={selected}/>
      <p>Has {votes[selected]} votes</p>
      <button onClick = {handleSelectedClick}>Next Anecdote</button>
      <button onClick = {handlePoints}>Vote</button>
      <h1>Anecdote with most votes</h1>
      <MostVotes votes={votes} anecdotes={anecdotes}/>
      </div>
  )
}

ReactDOM.render(<App  anecdotes={anecdotes} />, document.getElementById('root'))