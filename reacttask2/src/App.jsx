import { useState } from 'react'
import './App.css'

function App() {
  const [darkmode, setDarkmode] = useState(false)
  function clickDark(){
    setDarkmode(true)
  }
  function clickLight(){
    setDarkmode(false)
    
  }
  return (
    <>
      {darkmode ?(
        <div className="darkMode">
          <button className='btn-dark' onClick={clickLight}>Light theme</button>
          <div className="dark__mode__welcome">
          <p>Don't Welcome to React JS</p>

          </div>
        </div>
      ) :(
          <div className="lightMode">
            <button className='btn-light' onClick={clickDark}>Dark theme</button>
            <div className="light__mode__welcome">
            <p>Don't Welcome to React JS</p>
              </div>
          </div>
      )

      }
    </>
  )
}

export default App
