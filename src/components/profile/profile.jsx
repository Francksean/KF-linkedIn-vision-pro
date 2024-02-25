import React from 'react'
import { Link } from 'react-router-dom';
import './profile.css'
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import profileImg from '../../assets/profile-img.jpg'
import banner from '../../assets/banner-img.jpg'
import premiumIcon from '../../assets/premium-icon.png'
import uxMagazine from '../../assets/uxmagazine.png'
import adpList from '../../assets/adplist.png'
import memorisely from '../../assets/memorisely.png'
import awwwards from '../../assets/awwwards.jpg'
import medium from '../../assets/medium.jpg'
import react from '../../assets/react.jpg'
import gdg from '../../assets/gdg.jpg'


function Profile() {
  return (
    <div className='profile'>
      <div className="profile_header">
        <div className="profile_header_banner"><img src={banner} alt="" /></div>
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

