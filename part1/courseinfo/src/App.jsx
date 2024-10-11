const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return(
    <div>
      <Header course={course}/>
      <Content info={[part1,part2,part3]} />
      <Total number={part1.exercises+part2.exercises+part3.exercises}/>
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
    <Part part={props.info[0].name} exercise={props.info[0].exercises}/>
    <Part part={props.info[1].name} exercise={props.info[1].exercises}/>
    <Part part={props.info[2].name} exercise={props.info[2].exercises}/>
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