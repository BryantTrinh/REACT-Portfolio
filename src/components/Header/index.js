
import React from 'react';

import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1>Bryant Trinh- Full Stack Developer Portfolio</h1>
      <img src={coverImage} alt="background"></img>
      {props.children}
    </header>
  );
}

export default Header;