const App = () => {
  const course = 'Half Stack application development'
  const courseinfo ={
    part1:'Fundamentals of React',
    part2:'Using props to pass data',
    part3: 'State of a component',
    exercises1: 10,
    exercises2: 7,
    exercises3: 14
  }
  return(
    <div>
      <Header course={course}/>
      <Content courseinfo={courseinfo} />
      <Total number={courseinfo.exercises1+courseinfo.exercises2+courseinfo.exercises3}/>
    </div>
  )
}
const Header = (title) => {
  return (
    <h1>{title.course}</h1>
  )

}
const Content = (props) => {
  return <div>
    <Part part={props.courseinfo.part1} exercise={props.courseinfo.exercises1}/>
    <Part part={props.courseinfo.part2} exercise={props.courseinfo.exercises2}/>
    <Part part={props.courseinfo.part3} exercise={props.courseinfo.exercises3}/>
  </div>
    
}
const Part = (props) =>{
  return <p>
    {props.part} {props.exercise}
  </p>
}

const Total = (total) =>{
  return (
    <p>Number of exercises {total.number}</p>
  )
}



export default App