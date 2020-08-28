import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: 'Avril Ramona Lavigne',
      image: 'https://www.sonymusic.co.jp/adm_image/common/artist_image/80000000/80000406/artist_photo/54466.jpg',
      message: 'Whats up'
    },
    {
      name: 'Avril Ramona Lavigne',
      image: 'https://www.sonymusic.co.jp/adm_image/common/artist_image/80000000/80000406/artist_photo/54466.jpg',
      message: 'Hello'
    },
    {
      message: 'Whats up?'
    }
  ])

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You Matched with Avril on 10/08/20</p>
      {messages.map((message) => 
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
        
      )}
    </div>
  );
}

export default ChatScreen;