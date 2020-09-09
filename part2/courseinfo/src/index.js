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
 const total = props.parts.reduce((t,p)=> t + p.exercises , 0) 
  return(<div>
    <p>Number of exercises {total}</p>
  </div>)
}

const Parts = ({parts}) =>{
 // console.log(props)
  return(<div>
    <ul>
        {parts.map(parts => 
          <li>
            {parts.name} {parts.exercises}
          </li>
        )}
      </ul>
  </div>
  )
}

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