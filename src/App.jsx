import { useState } from 'react'
import cutebabyone from './assets/cutebabytwo.jpeg'
import cutebabytwo from '/cutebabyone.jpeg'
import './App.css'
import Profile from './components/Profile/Profile'

function App() {
  const [count, setCount] = useState(0)
  const size = 100

  return (
    <>
      <div>
        <Profile size={size}/>
        count is {count}
        <a href="public/cutebabyone.jpeg" target="_blank">
          <img src={cutebabyone} className="logo" alt="Vite logo" />
        </a>
        <a href="src/assets/cutebabytwo.jpeg" target="_blank">
          <img src={cutebabytwo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
