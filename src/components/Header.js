import React from 'react'
import Button from './Button'

const Header = () => {
    const onClick=() => {
        console.log('click');
    }
  return (
    <header className='header'>
        <h1>Task Manager</h1>
        <Button onClick={onClick} 
         color='green' text='Add'/>
    </header>
  )
}

export default Header