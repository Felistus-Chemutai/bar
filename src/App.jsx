import React from 'react'
import { useState } from 'react'
import Percentage from './Componets/Percentage'
import './app.css'
import Bar from './Componets/Bar'

const App = () => {
  const[percentage,setPercentage] = useState();
    function handleChange(event){
        setPercentage(event.target.value);
    }
  return (
    <div className='app'>
      <h1>Progress Bar</h1>
     <Bar percentage={percentage} />
      <Percentage percentage ={percentage} handleChange={handleChange}  />
    </div>
  )
}

export default App
