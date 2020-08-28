import React from 'react';
import './Chats.css';
import Chat from './Chat';

const Chats = () => {
  return (
    <div className="chats">
      <Chat 
        name="マツコデラックス"
        message="マツコです"
        timestamp="40 seconds ago"
        profilePic="https://urbanlife.tokyo/wp-content/uploads/2020/02/200225_matsuko_01.jpg"
      />

      <Chat 
        name="Avril Ramona Lavigne"
        message="Hello"
        timestamp="3 days ago"
        profilePic="https://www.sonymusic.co.jp/adm_image/common/artist_image/80000000/80000406/artist_photo/54466.jpg"
      />

      <Chat 
        name="ヒカキン"
        message="ブンブンハローYou Tube！"
        timestamp="2 week ago"
        profilePic="https://pbs.twimg.com/profile_images/1123471964058914816/a8sXngWB.png"
      />

      <Chat 
        name="橋本環奈"
        message="はしもとかーんな"
        timestamp="4 week ago"
        profilePic="https://coconutsjapan.com/wp-content/uploads/2019/09/jiji_hashimotokanna.jpg"
      />


    </div>
  )
}

export default Chats;