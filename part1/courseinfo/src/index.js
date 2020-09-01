import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const App = (props) => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)


/*
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)


const Header = (props) =>{
  return(<div>
    <h1>{props.course} </h1>
  </div>)
}
const Content = (props) =>{
  console.log(props)
  return(
   <div>
      <Part1 part1 = {props.parts[0].name} exercises1 = {props.parts[0].exercises}  />
      <Part2 part2 = {props.parts[1].name} exercises2 = {props.parts[1].exercises} />
      <Part3 part3 = {props.parts[2].name} exercises3 = {props.parts[2].exercises} />
    </div>
  )
}
const Total = (props) =>{
  return(<div>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  </div>)
}

const Part1 = (props) =>{
  return(
    <p>
      {props.part1} {props.exercises1}
    </p>
    
  )
}
const Part2 = (props) =>{
  return(
    <p>
      {props.part2} {props.exercises2}
    </p>
    
  )
}
const Part3 = (props) =>{
  return(
    <p>
      {props.part3} {props.exercises3}
    </p>
    
  )
}

const App = () => {
    const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts} />
      <Total parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))*/