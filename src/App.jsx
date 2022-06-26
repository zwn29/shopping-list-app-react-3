import { useState } from 'react'
import './App.css'
import Listform from './Listform'
import './gradient.css'

function App () {
  return (
    <div className='h-screen bg-emerald-500 gradient relative flex justify-center items-end'>
      <Listform />
    </div>
  )
}

export default App
