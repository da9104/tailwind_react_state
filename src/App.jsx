import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import './App.css'
import Example from './Example.jsx'

export function ScoreKeeper({ numPlayer = 3, target= 5}) {
  const [scores, setScores] = useState(new Array(numPlayer).fill(0))
  // const incrementScore = (inx) => {
  //   setScores((prevScores) => {
  //     const copy = [...prevScores]
  //     copy[idx] += 1
  //     return copy
  //   })
  // }
  const incrementScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i === idx) return score + 1
        return score
      })
    })
  }

const reset = () => {
  setScores()
}

  return (
    <div>
      <h1 className="text-sm font-medium text-gray-900">Score keeper</h1>
      <ul>
        <li key={idx}>
        </li>
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <div>

    <Example />
     {/* <ScoreKeeper/> */}
     </div>
  )
}
