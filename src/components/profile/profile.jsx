import React, { useEffect, useState, useRef } from 'react'
import './profile.css'
import Manager from '../manager/manager';
import { gsap } from 'gsap'

import { CSSPlugin } from 'gsap/CSSPlugin'; // Import du plugin CSSPlugin

gsap.registerPlugin(CSSPlugin); // Enregistrement du plugin CSSPlugin


import Divider from '@mui/material/Divider';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import profileImg from '../../assets/profile-img.jpg'
import banner from '../../assets/banner-img.jpg'
import premiumIcon from '../../assets/premium.png'
import uxMagazine from '../../assets/uxmagazine.png'
import adpList from '../../assets/adplist.png'
import memorisely from '../../assets/memorisely.png'
import awwwards from '../../assets/awwwards.jpg'
import medium from '../../assets/medium.jpg'
import react from '../../assets/react.jpg'
import gdg from '../../assets/gdg.jpg'
import { Timeline } from 'gsap/gsap-core';

function Profile() {
  const [ isProfileOpen, setIsProfileOpen ] = useState(false)

  const profileRef = useRef(null)
  const managerRef = useRef(null)

  const toggleProfile = ()=>{
    if(isProfileOpen){
      setIsProfileOpen(false)
    }else{
      setIsProfileOpen(true)
    }
  }
  useEffect(()=>{
    const profileComponent = profileRef.current
    const manangerComponent = managerRef.current
    const timeline = new gsap.timeline()


    if(isProfileOpen){
      timeline.to(profileComponent, {
        width:0,
        height:0,
        duration:1,
      })
      .to(manangerComponent,{
        y:305,
        duration:0.2
      })
      .to(manangerComponent,{
        x:150,
        duration:0.2
      })

    }else{
      timeline.to(manangerComponent,{
        x:0,
        duration:0.1
      })
      .to(manangerComponent,{
        y:0,
        duration:0.1
      })
      .to(profileComponent, {
        width:307,
        height:500,
        duration:0.5,
      })
    }
  }, [isProfileOpen])
  return (
    <>
      <Manager func={toggleProfile} isOpen={isProfileOpen} comp={"profile"} ref={managerRef}/>
      <div className='profile' ref={profileRef}>
        <div className="profile_header">
          {/* <div className="profile_header_banner"><img src={banner} alt="" /></div> */}
          <div className="profile_header_banner"></div>
          <div className="profile_header_card">
            <img src={profileImg} alt="" />
            <p>Franck Sean DJISSOU</p>
            <p>Software Engineer </p>
          </div>

        </div>
        <Divider/>
        <div className="profile_body">
          <div className="profile_analytics">
            <p>Analytics & tools</p>
            <p>1,00 post impressions</p>
          </div>
          <Divider/>
          <div className="profile_exclusive">
            <p>Access exclusive tools & insights</p>
            <div className="profile_exclusive_bottom">
              <img src={premiumIcon} alt="" />
              <p>Get Hired Faster, Try Premium Free</p>
            </div>
          </div>
          <Divider/>
          <div className="profile_favorites">
            <BookmarkIcon style={{color:'rgba(255,255,255,0.8)', height:'15px'}}/>
            <p>My items</p>
          </div>
          <Divider/>
          <Divider/>
          <Divider/>
          <div className="profile_proposals">
            <p>Add to your feed</p>
            <div className="profile_proposals_container">
              <ProposalItem src={adpList} title={"adplist.org"} brief={"Company | Higher Education"}/>
              <ProposalItem src={awwwards} title={"Awwwards"} brief={"Company | Web & Design"}/>
              <ProposalItem src={medium} title={"Medium"} brief={"Company | Blog & Articles"}/>
              <ProposalItem src={uxMagazine} title={"UX Magazine"} brief={"Company | Online Media"}/>
              <ProposalItem src={gdg} title={"Google Developer Group"} brief={"Company | Google"}/>
              <ProposalItem src={memorisely} title={"Memorisely"} brief={"Company | E-learning"}/>
              <ProposalItem src={react} title={"React"} brief={"Company | High Tech"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile





function ProposalItem({src, title, brief}) {
  return (
    <div className='proposal_item'>
      <img src={src} alt="" />
      <div className="proposal_item_infos">
        <p>{title}</p>
        <p>{brief}</p>
        <button>+ Follow</button>
      </div>
    </div>
  )
}

