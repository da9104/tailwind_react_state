import { useState } from 'react'
import './App.css'

export function ColorList({colors}) {
  return (
    <>
      <p>color list</p>
      <ul>{colors.map((c) => <li style={{color: c}}>{c}</li>)}</ul>
    </>
  )

}

function App() {
  const [count, setCount] = useState(0)
  const num1 = Math.floor(Math.random() * 3) + 1
  const num2 = Math.floor(Math.random() * 3) + 1
  const isWinner = num1 === num2;
  const styles = {color: isWinner ? 'green' : 'red'}
  return (
    <>
      <div style={styles}>
        <h2>Double Dice</h2>
        {isWinner && <h3 >You are win</h3>}
        <p>Number 1 : {num1}</p>
        <p>Number 2 : {num2}</p>
      </div>

      <ColorList colors={["red","blue","yellow"]}/>
    </>
  )
}

export default App
