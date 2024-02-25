import { useState } from 'react'
import './App.css'

import Discussions from './components/discussions/discussions'
import Feed from './components/feed/feed'
import Profile from './components/profile/profile'

function App() {

  return (
    <>
      <div className="obstructer"></div>
      <div className='App'>
        <Profile/>
        <Feed/>
        <Discussions/>
      </div>
    </>
  )
}

export default App
