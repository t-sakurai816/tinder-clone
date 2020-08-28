import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className="header">
      <PersonIcon />
      <h2>I am a header</h2>
      <ForumIcon />
    </div>
  )
}

export default Header;