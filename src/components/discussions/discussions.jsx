import React, { useState, useEffect, useRef } from 'react'
import SearchBar from '../searchbar/searchbar'
import './discussions.css'
import Manager from '../manager/manager';
import { gsap } from "gsap"

import EditNoteIcon from '@mui/icons-material/EditNote';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';


import profileImg from '../../assets/profile-img.jpg'

import profilePic1 from '../../assets/profilepic1.png'
import profilePic2 from '../../assets/profilepic2.png'
import profilePic3 from '../../assets/profilepic3.png'
import profilePic4 from '../../assets/profilepic4.png'
import profilePic5 from '../../assets/profilepic5.png'
import profilePic8 from '../../assets/profilepic8.png'
import { Timeline } from 'gsap/gsap-core';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  }
}));





function Discussions() {

  const [ isDiscOpen, setIsDiscOpen ] = useState(false)

  const discRef = useRef(null)
  const managerRef = useRef(null)

  const toggleDisc = ()=>{
    if(isDiscOpen){
      setIsDiscOpen(false)
    }else{
      setIsDiscOpen(true)
    }
  }
  useEffect(()=>{
    const discComponent = discRef.current
    const manangerComponent = managerRef.current
    const timeline = new Timeline()

    if(isDiscOpen){
      timeline.to(discComponent, {
        width:0,
        height:0,
        duration:1,
      })

    }else{
      timeline.to(discComponent, {
        width:307,
        height:500,
        duration:1,
      })
    }
  }, [isDiscOpen])


  return (
    <>
      <div className='discussions' ref={discRef}>
        <div className="discussions_header">
          <div className="discussions_header_top">
            <div className="discussions_header_left">
              <div className="discussions_header_left_img">
                <img src={profileImg} alt="" />
              </div>
              <h3>Messaging</h3>
            </div>
            <div className="discussions_header_right">
              <MoreHorizIcon style={{color:'white', height:'17.2px', width:'17.2px'}}/>
              <EditNoteIcon style={{color:'white', height:'17.2px', width:'17.2px'}}/>
            </div>
          </div>
          <SearchBar settings={true}/>
          <div className="discussions_categories">
            <p>Focused</p>
            <p>Other</p>
          </div>
        </div>
        <div className="discussions_container">
          <DiscussionItem src={profilePic1} name={"Jade Bankole"} time={"4:44"} content={"Jade: What's new?"} unread={3} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic2} name={"Tony Blair"} time={"4:24"} content={"Tony: I've sent you a copy of the doc."} unread={8} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic3} name={"Martins Gonzalez"} time={"3:01"} content={"You: Thanks for accepting my requ... "} state={"base"}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic4} name={"Lugard Frederick"} time={"2:26"} content={"Lugard: Hi"} unread={1} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic5} name={"Ash Williams"} time={"2:04"} content={"You: Congrats on the new role"} state={"base"}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic8} name={"Blessing Kay"} time={"1:01"} content={"Blessing: Great Job !"} state={"bold"} unread={1}/>
          <DiscussionItem src={profilePic1} name={"Jade Bankole"} time={"4:44"} content={"Jade: What's new?"} unread={3} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic2} name={"Tony Blair"} time={"4:24"} content={"Tony: I've sent you a copy of the doc."} unread={8} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic3} name={"Martins Gonzalez"} time={"3:01"} content={"You: Thanks for accepting my requ... "} state={"base"}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic4} name={"Lugard Frederick"} time={"2:26"} content={"Lugard: Hi"} unread={1} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic5} name={"Ash Williams"} time={"2:04"} content={"You: Congrats on the new role"} state={"base"}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic8} name={"Blessing Kay"} time={"1:01"} content={"Blessing: Great Job !"} state={"bold"} unread={1}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic1} name={"Jade Bankole"} time={"4:44"} content={"Jade: What's new?"} unread={3} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic2} name={"Tony Blair"} time={"4:24"} content={"Tony: I've sent you a copy of the doc."} unread={8} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic3} name={"Martins Gonzalez"} time={"3:01"} content={"You: Thanks for accepting my requ... "} state={"base"}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic4} name={"Lugard Frederick"} time={"2:26"} content={"Lugard: Hi"} unread={1} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic5} name={"Ash Williams"} time={"2:04"} content={"You: Congrats on the new role"} state={"base"}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic8} name={"Blessing Kay"} time={"1:01"} content={"Blessing: Great Job !"} state={"bold"} unread={1}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic1} name={"Jade Bankole"} time={"4:44"} content={"Jade: What's new?"} unread={3} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic2} name={"Tony Blair"} time={"4:24"} content={"Tony: I've sent you a copy of the doc."} unread={8} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic3} name={"Martins Gonzalez"} time={"3:01"} content={"You: Thanks for accepting my requ... "} state={"base"}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic4} name={"Lugard Frederick"} time={"2:26"} content={"Lugard: Hi"} unread={1} state={"bold"} isConnected={true}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic5} name={"Ash Williams"} time={"2:04"} content={"You: Congrats on the new role"} state={"base"}/>
          <Divider variant="inset"/>
          <DiscussionItem src={profilePic8} name={"Blessing Kay"} time={"1:01"} content={"Blessing: Great Job !"} state={"bold"} unread={1}/>
        </div>
      </div>
      <Manager func={toggleDisc} isOpen={isDiscOpen} comp={"discussions"} ref={managerRef}/>
    </>
  )
}

export default Discussions

function DiscussionItem({ src, name, time, content, unread, state, isConnected }) {
  return (
    <div className='discussion_item'>
      <div className="discussion_item_img">
        {
          isConnected ? <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot">
          <Avatar alt="Remy Sharp" src={src} />
        </StyledBadge> : <Avatar alt="Remy Sharp" src={src} />
        }
      </div>
      <div className="discussion_item_details">
        <div className={`discussion_item_details_top_${state}`}>
          <p>{name}</p>
          <p>{`${time} PM`}</p>
        </div>
        <div className="discussion_item_details_bottom">
          <p>{content}</p>
          {
            unread ? <p>{unread}</p> : null
          }
        </div>
      </div>
    </div>
  )
}
