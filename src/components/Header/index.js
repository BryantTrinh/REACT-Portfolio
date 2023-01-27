
import React from 'react';

import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {
  return (
    <header className="flex-row space-between px-0.1">
      <h1>Bryant Trinh</h1>
      <img src={coverImage} alt="background"></img>
      {props.children}
    </header>
  );
}

export default Header;