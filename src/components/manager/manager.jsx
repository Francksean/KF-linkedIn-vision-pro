import React, { forwardRef, useState } from 'react'
import './manager.css'
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

const Manager = forwardRef(function Manager({func, isOpen, comp}, ref) {
  const handleClick = ()=>{
    func();
    console.log(isOpen)
  }
  return (
    <>
    {
      comp === "profile" ?
        <div className='manager' ref={ref} onClick={()=>handleClick()}>
          {
            !isOpen ? 
            <CloseIcon style={{color:'white', height:'15px', width:'15px'}}/>
            :
            <PersonIcon style={{color:'white', height:'25px', width:'25px'}}/>
          } 
        </div> 
        :
        <div className='manager' ref={ref} onClick={()=>handleClick()}> 
        {
            !isOpen ? 
            <CloseIcon style={{color:'white', height:'15px', width:'15px'}}/>
            :
            <EmailIcon style={{color:'white', height:'25px', width:'25px'}}/>
          }
        </div>
    }
    </>
    
  )
})

export default Manager