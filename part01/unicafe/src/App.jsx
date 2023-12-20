import { useState } from 'react'
import './App.css'

const Title = ({ text }) => <>{text}</>
const StatisticLine = ({ text, votes }) => <tr><td>{text}</td><td>{votes}</td></tr>
const Button = ({ handlerClick, text}) => <button onClick={handlerClick}> {text} </button>

const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad
  const average = ((props.good - props.bad) / total).toFixed(2)

  if ( total === 0) {
    return <h4>No Feedback given</h4>
  }

  return(
    <>
      <table>
        <tbody>
          <StatisticLine text={'Good: '} votes={props.good}/>
          <StatisticLine text={'Neutral: '} votes={props.neutral}/>
          <StatisticLine text={'Bad: '} votes={props.bad}/>
          <StatisticLine text={'All: '} votes={total}/>
          <StatisticLine text={'Average: '} votes={average > 0 ? average : 0}/>
          <StatisticLine text={'Percent Positive: '} votes={((props.good / total)*100).toFixed(2) + '%'}/>
        </tbody>
      </table>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h2>
        <Title text={'Give Feedback'}/>
      </h2>
      <Button handlerClick={() => setGood(good + 1)} text={'GOOD'}/>
      <Button handlerClick={() => setNeutral(neutral + 1)} text={'NEUTRAL'}/>
      <Button handlerClick={() => setBad(bad + 1)} text={'BAD'}/>
      <h2>
        <Title text={'Statistics'}/>
      </h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  )
}

export default App
