import './App.css'
import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const nextAnecdote = () => {
  const num = Math.floor(Math.random() * anecdotes.length)
  return num
}

const Title = ({ text }) => <h2> {text} </h2>
const Button = ({ handlerclick, text }) => <button onClick={handlerclick}> {text} </button>
const Vote = ({ votes }) => <p>has <span>{votes}</span> votes</p>

const MaxVotes = ({ anecdote, votes }) => {

  const mostVotes = votes === 0
    ? 'No votes yet'
    : `${anecdote} has ${votes} votes`

  return(
    <>
      <p>{mostVotes}</p>
    </>
  )
}

function App() {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const max = Math.max(...votes)
  const indexMaxVoted = votes.indexOf(max)

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] +=1
    setVotes(newVotes)
  }

  return (
    <div>
      <Title text={'Anecdote of the day'}/>
      <q>{anecdotes[selected]}</q>
      <Vote votes={votes[selected]}/>
      <Button handlerclick={vote} text={'Vote'}/>
      <Button handlerclick={() => setSelected(nextAnecdote())} text={'Next Anecdote'}/>
      <Title text={'Anecdote with most votes'}/>
      <MaxVotes anecdote={anecdotes[indexMaxVoted]} votes={max}/>
    </div>
  )
}

export default App
