import { useEffect, useState } from 'react'
import './App.css'

import Discussions from './components/discussions/discussions'
import Feed from './components/feed/feed'
import Profile from './components/profile/profile'

import CachedIcon from '@mui/icons-material/Cached';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';

import background1 from './assets/background-linkedin-vision-pro1.jpg';
import background2 from './assets/background-linkedin-vision-pro2.jpg';
import background3 from './assets/background-linkedin-vision-pro3.jpg';
import background4 from './assets/background-linkedin-vision-pro4.jpg';

function App() {
  const [backgroundCounter, setBackgroundCounter] = useState(1)
  const [ isBrightnessLow, setIsBrightnessLow ] = useState(true)

  const backgroundChanger = () => {
    if (backgroundCounter === 4) {
      setBackgroundCounter(1)
    } else {
      setBackgroundCounter(prevCounter => prevCounter + 1)
    }
  }
  const setBrightness = ()=>{
    if(isBrightnessLow){
      setIsBrightnessLow(false)     
    }else{
      setIsBrightnessLow(true)
    }
  }
  function getBackgroundImage() {
    switch (backgroundCounter) {
      case 1:
        return background1;
      case 2:
        return background2;
      case 3:
        return background3;
      case 4:
        return background4;
      default:
        return background1;
    }
  }

  return (
    <>
      {
        isBrightnessLow ? <div className="obstructer"></div> : null
      }
      <div className='App' style={{ backgroundImage: `url(${getBackgroundImage()})` }}>
        <Profile />
        <Feed />
        <Discussions />
      </div>
      <div className="buttons_container">
        <button className='button' onClick={()=>backgroundChanger()}>
          <CachedIcon style={{height:'15px', width:'15px', color:'white'}}/>
        </button>
        <button className='button' onClick={()=>setBrightness()}>
          {
            isBrightnessLow ? <BrightnessMediumIcon style={{height:'15px', width:'15px', color:'white'}}/>
            : <BrightnessLowIcon style={{height:'15px', width:'15px', color:'white'}}/>
          }
        </button>
      </div>
      <div className="disclaimer">
        PLEASE RESIZE YOUR SCREEN          
      </div>
    </>
  )
}

export default App

