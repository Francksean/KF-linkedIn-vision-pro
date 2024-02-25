import { useState } from 'react'
import './App.css'

import Discussions from './components/discussions/discussions'
import Feed from './components/feed/feed'

function App() {

  return (
    <>
      <div className="obstructer"></div>
      <div className='App'>
        <Feed/>
        <Discussions/>
      </div>
    </>
  )
}

export default App
