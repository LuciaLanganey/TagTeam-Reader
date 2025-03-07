import { useState } from 'react'
import BeeLineLogo from '/BeeLine logos/beeline_logo_icon_master.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TagTeam Reader by BeeLine Reader</h1>
      <div>
          <img src={BeeLineLogo} className="logo" alt="BeeLine logo" style={{height: '500px'}}/>
      </div>
    </>
  )
}

export default App
