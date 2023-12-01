import './App.css'

const Header = ({title}) => <h1> {title} </h1>


// Access props without destructuring
const Part = (props) => <p> {props.part}: <strong>{props.exercise}</strong> </p>

const Content = ({parts}) => {
  return (
    <>
      < Part part={parts[0].name} exercise={parts[0].exercises} />
      < Part part={parts[1].name} exercise={parts[1].exercises} />
      < Part part={parts[2].name} exercise={parts[2].exercises} />
    </>
  )
}

const Total = ({parts}) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <p> Total of exercises: <strong>{total}</strong> </p>
  )
}

function App() {
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
      {< Header title={course.name} />}
      {< Content parts={course.parts} />}
      {< Total parts={course.parts} />}
    </div>
  )
}

export default App
