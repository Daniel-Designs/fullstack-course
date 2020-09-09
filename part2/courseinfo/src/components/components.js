import React from 'react'

const Header = (props) =>{
  return(<div>
    <h1>{props.course} </h1>
  </div>)
}
const Content1 = (props) =>{
 
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
          <li  key={parts.id}>
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
export  {Header}
export  {Content}
export  {Content1} 
export  {Total}
export  {Parts}

