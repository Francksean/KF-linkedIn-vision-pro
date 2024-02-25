import React, {useState} from 'react'
import './feed.css'
import Navbar from '../navbar/navbar';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchBar from '../searchbar/searchbar'
import profileImg from '../../assets/profile-img.jpg'
import linkedInLogo from '../../assets/Linkedin-logo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SendIcon from '@mui/icons-material/Send';
import PublicIcon from '@mui/icons-material/Public';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';


import profilePic7 from '../../assets/profilepic7.png'
import postImage1 from '../../assets/post-image-1.png'

import appreciateIcon from '../../assets/appreciate-icon.png'
import ideaIcon from '../../assets/idea-icon.png'
import clapIcon from '../../assets/clap-icon.png'

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
      content: "''",
    },
  }
}));



function Feed() {
  const [ PostContent, setPostContent ] = useState()
  const updateValue = ()=>{
    setPostContent(e.target.value)
  }
  return (
    <div className='false_feed'>

      <div className='feed'>
        <div className="feed_header">
          <img src={linkedInLogo} alt="" />
          <SearchBar settings={false}/>
          <div className="feed_header_profile">
            <img src={profileImg} alt="" />
            <ExpandMoreIcon style={{color:'white', height:'13px', width:'13px'}}/>
          </div>
        </div>
        <div className="make_post">
          <div className="make_post_top">
            <img src={profileImg} alt="" />
            <input type="text" name="post-content" value={PostContent} id="" placeholder='Start a post' onChange={()=>{updateValue}}/>
          </div>
          <div className="make_post_bottom">
            <div className='make_post_bottom_button'>
              <PhotoSizeSelectActualOutlinedIcon style={{color:'rgba(35,109,220,0.8)'}}/>
              <p>Post</p>
            </div><div className='make_post_bottom_button'>
              <VideocamIcon style={{color:'rgba(104,176,74,1)'}}/>
              <p>Video</p>
            </div><div className='make_post_bottom_button'>
              <WorkIcon style={{color:'rgba(154,74,225,0.8)'}}/>
              <p>Job</p>
            </div><div className='make_post_bottom_button'>
              <ArticleIcon style={{color:'rgba(252,93,93,1)'}}/>
              <p>Write an article</p>
            </div>
          </div>
        </div>
        <div className="feed_container">
          <FeedItem srcProfile={profilePic7}
            connected={true}
            name={"Flavour Johnson"}
            follow={true}
            brief={"Founder of GameX - The emperor | The Conqueror | The Champion | The Lion"}
            time={"2m"}
            content={"How to steal 100K hearts for free"}
            seeMore={true}
            srcPost={postImage1}
            nbrReactions={"10,204"}
            nbrComments={2500}
            nbrReposts={1053}/>
          <FeedItem srcProfile={profilePic7}
            connected={true}
            name={"Flavour Johnson"}
            follow={true}
            brief={"Founder of GameX - The emperor | The Conqueror | The Champion | The Lion"}
            time={"2m"}
            content={"How to steal 100K hearts for free"}
            seeMore={true}
            srcPost={postImage1}
            nbrReactions={"10,204"}
            nbrComments={2500}
            nbrReposts={1053}/>
          <FeedItem srcProfile={profilePic7}
            connected={true}
            name={"Flavour Johnson"}
            follow={true}
            brief={"Founder of GameX - The emperor | The Conqueror | The Champion | The Lion"}
            time={"2m"}
            content={"How to steal 100K hearts for free"}
            seeMore={true}
            srcPost={postImage1}
            nbrReactions={"10,204"}
            nbrComments={2500}
            nbrReposts={1053}/>
          <FeedItem srcProfile={profilePic7}
            connected={true}
            name={"Flavour Johnson"}
            follow={true}
            brief={"Founder of GameX - The emperor | The Conqueror | The Champion | The Lion"}
            time={"2m"}
            content={"How to steal 100K hearts for free"}
            seeMore={true}
            srcPost={postImage1}
            nbrReactions={"10,204"}
            nbrComments={2500}
            nbrReposts={1053}/>
          <FeedItem srcProfile={profilePic7}
            connected={true}
            name={"Flavour Johnson"}
            follow={true}
            brief={"Founder of GameX - The emperor | The Conqueror | The Champion | The Lion"}
            time={"2m"}
            content={"How to steal 100K hearts for free"}
            seeMore={true}
            srcPost={postImage1}
            nbrReactions={"10,204"}
            nbrComments={2500}
            nbrReposts={1053}/>
        </div>
      </div>
      <Navbar/>
    </div>
  )
}

export default Feed


function FeedItem({srcProfile,connected,name, follow,brief,time,content,seeMore,srcPost,nbrReactions,nbrComments,nbrReposts }) {
  return (
    <div className='feed_item'>
      <div className="feed_item_header">
        {
          connected ? 
          <>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot">
                <Avatar alt="" src={srcProfile} style={{height:"50px", width:'50px'}} />
            </StyledBadge>
          </>
          : <img src={srcProfile} alt="" />

        }
        <div className="feed_item_header_infos">
          <div className="feed_item_header_infos_top">
            {
              follow ? <p>{`${name} `}<span className='feed_item_infos_grey-60'>- Following</span></p> : <p>{name}</p>
            }
            <MoreHorizIcon style={{color:'#8A8D90'}}/>
          </div>
          <p className='feed_item_infos_grey-60'>{brief}</p>
          <div className="feed_item_header_time">
            <p className='feed_item_infos_grey-60'>{time}</p>
            <FiberManualRecordIcon style={{color:'rgba(88,92,96,0.6)', height:'2px',width:'2px'}}/>
            <PublicIcon style={{color:'rgba(88,92,96,0.6)', height:'9px',width:'9px'}}/>
          </div>
        </div>
      </div>
      <div className="feed_item_body">
        <div className="feed_item_body_text">
          <p>{content}</p>
          {
            seeMore ? <p className='feed_item_infos_grey-60'>...see more</p> : null
          }
        </div>
        <img src={srcPost} alt="" />
      </div>
      <div className="feed_item_reactions">
        <div className="feed_item_reactions_top">
          <div className="feed_item_reactions_top_left">
            <AvatarGroup>
              <Avatar alt="" src={clapIcon} style={{height:'23px', width:'23px'}}/>
              <Avatar alt="" src={ideaIcon}  style={{height:'23px', width:'23px'}}/>
              <Avatar alt="" src={appreciateIcon}  style={{height:'23px', width:'23px'}}/>
            </AvatarGroup>
            <p className='feed_item_infos_grey-60'>{nbrReactions}</p>
          </div>
          <div className="feed_item_reactions_top_right">
            <p className='feed_item_infos_grey-60'>{`${nbrComments} comments`}</p>
            <p className='feed_item_infos_grey-60'>{`${nbrReposts} reposts`}</p>
          </div>
        </div>
        <Divider variant="middle"/>
        <div className="feed_item_reactions_buttons">
          <div className="feed_item_reactions_buttons_item">
            <ThumbUpOutlinedIcon style={{color:'#585C60', height:'14px', width:'14px'}}/>
            <p>Like</p>
          </div>
          <div className="feed_item_reactions_buttons_item">
            <MessageOutlinedIcon style={{color:'#585C60', height:'14px', width:'14px'}}/>
            <p>Comment</p>
          </div>
          <div className="feed_item_reactions_buttons_item">
            <ShortcutIcon style={{color:'#585C60', height:'14px', width:'14px'}}/>
            <p>Share</p>
          </div>
          <div className="feed_item_reactions_buttons_item">
            <SendIcon style={{color:'#585C60', height:'14px', width:'14px', transform:'rotate(-40deg)'}}/>
            <p>Send</p>
          </div>
        </div>
      </div>
    </div>
  )
}

