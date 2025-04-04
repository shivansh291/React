import React, {useState} from 'react'
import './index.css'
const App = () => {
  let [value, setValue] = useState(0)
  
  let plus = () => {
    setValue(value + 1)
  }
  
  let minus = () => {
    setValue(value - 1)
  }
  
  return (
    <div className = "app">
      <h1>{value}</h1>
      <div className = 'buttons'>
        <button onClick = {plus} className = 'plus'>+1</button>
        <button onClick = {minus} className = 'minus'>-1</button>
      </div>
    </div>
  )
}

export default App