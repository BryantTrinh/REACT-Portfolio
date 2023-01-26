

import React from 'react';

function footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/BryantTrinh"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/bryant-trinh-60208014a/"
    },
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon => (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
  }

  export default Footer;