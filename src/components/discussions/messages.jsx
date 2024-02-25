import React from 'react'

import profileImg from '../../assets/profile-img.jpg'
import dotsIcon from '../../assets/dots.png'
import writeMessageIcon from '../../assets/write-message-icon.png'

function Messages() {
  return (
    <div>
      <div className="messages_header">
        <div className="messages_header_left">
          <img src={profileImg} alt="" />
          <h3>Messaging</h3>
        </div>
        <div className="messages_header_right">
          <div className="messages_header_right_img">
            <img src={dotsIcon} alt="" />
          </div>
          <div className="messages_header_right_img">
            <img src={writeMessageIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages