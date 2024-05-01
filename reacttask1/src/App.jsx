import { useState } from 'react'
import './App.css'
function App() {
  const[modal,setModal]=useState(false)
  function clickModal(){
    setModal(!modal)
  }
  return (
    <>
      <button className="btn-open" onClick={clickModal}>
        Open Modal
      </button>
    {modal ? (
            <div class  Name="modal">
            <div className="overlay">
          <div className="modalcontents">
            <p>Some text in the Modal...</p>
            <button className="btn-close" onClick={clickModal}>X</button>
          </div>
            </div>
    
          </div>
    ) :(
      null

    )
      
    }

    </>
  )
}

export default App
