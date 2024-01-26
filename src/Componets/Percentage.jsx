import React from 'react'
import { useState } from 'react'
import './Percentage.css'

const Percentage = ({percentage,handleChange}) => {

  return (
    <div className='number'>
      
        <p><b>  Input Percentage:    </b></p>
        <input type='number' value={percentage} onChange={handleChange} />
    
    </div>
  )
}

export default Percentage
