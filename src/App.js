import React, { useState } from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';


const App = () => {
  const [value, setValue] = useState('')

  return (
      <div className='App'>
        <ClassCounter />
      </div>
  )
}

export default App
