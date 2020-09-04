import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return(<div>
    <h1>{props.course} </h1>
  </div>)
}
const Content1 = (props) =>{
  //console.log(props)
  return(
   <div>
    <Parts parts={props.parts}/>  
    </div>
  )
}
const Total = (props) =>{
  return(<div>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  </div>)
}

const Parts = ({parts}) =>{
 // console.log(props)
  return(<div>
    <ul>
        {parts.map(parts => 
          <li>
            {parts.name}
          </li>
        )}
      </ul>
  </div>
  )
}
/*
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
*/
const Content = (props) => {
  return(
    <div>     
      <Header course = {props.course.name}/>
      <Content1 parts = {props.course.parts} />
      <Total parts = {props.course.parts}/>
    </div>

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
  return (<Content course={course}/>)
}

ReactDOM.render(<App />, document.getElementById('root'))