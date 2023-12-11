import React from 'react'
import './Header.css'
import logoimg from '../../img/Ignitesimbol.png'

const Header = () => {
  return (
    <header>
        <div className='content'>
            <div className='Marca'>
                <img src={logoimg} alt="" />
                <h1>Dt Money</h1>
            </div>
            <button type='button'>Nova transação</button>
        </div>
    </header>
  )
}

export default Header
