import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p>Download my Linkedin<a href="https://www.linkedin.com/in/bryant-trinh-60208014a/">resume</a></p>
      <h3>Front-End Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize, NoSQL</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}


export default Resume;