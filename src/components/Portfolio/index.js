import React, { useState } from 'react';
import Project from "../Project";


function Portfolio() {
  const [projects] = useState([
    {
      name: 'Anime E-Commer Website ',
      description: 'Anime Search and Product Recommendations.',
      link: 'https://thien-le13.github.io/anime-ecommerce-webapp',
      repo: 'https://github.com/thien-le13/weeb-gifts',
    },
     {
      name: 'SENDMOODS',
      description: 'A social media app that allows users to share their feelings and/or thoughts via posting status updates and emojis. Additionally, users are able to share music, bookmark posts, and filter posts.  ',
      link: 'https://shrouded-eyrie-81227.herokuapp.com/',
      repo: 'https://github.com/BryantTrinh/Mood-App-Send-Moods',
    },
     {
      name: 'Timed Quiz Game',
      description: ' Mini timed quiz game that you can play in browser.',
      link: 'https://bryanttrinh.github.io/Code-Timed-Quiz-Game/',
      repo: 'https://github.com/BryantTrinh/Code-Timed-Quiz-Game',
    },
     {
      name: 'Word Guessing Game',
      description: 'Word guessing game that you can play in browser. ',
      link: 'https://bryanttrinh.github.io/Word-Guessing-Game-JavaScript/',
      repo: 'https://github.com/BryantTrinh/Word-Guessing-Game-JavaScript',
    },
     {
      name: 'Password Generator',
      description: 'In browser password generator, where you can select certain criterias for what you want your password to have.',
      link: 'https://bryanttrinh.github.io/Javascript-password-generator/',
      repo: 'https://github.com/BryantTrinh/Javascript-password-generator',
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project}
          key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;