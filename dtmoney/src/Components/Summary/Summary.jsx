import React from 'react'
import './Summary.css'
import { FaArrowAltCircleUp } from "react-icons/fa";


const Summary = () => {
  return (
    <div className=''>
        <div className='container-summary'>
            <p>Entradas</p>
            <FaArrowAltCircleUp />
        </div>
        <strong>R$ 1000,00</strong>
    </div>
  )
}

export default Summary
