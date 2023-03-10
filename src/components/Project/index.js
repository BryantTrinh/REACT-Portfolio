import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {
  const { name, repo, link, description } = project;
  
  // Try to import the PNG file. If it fails, try the JPG file.
  let projectImg;
  try {
    projectImg = require(`../../assets/projects/${name}.png`);
  } catch (e) {
    try {
      projectImg = require(`../../assets/projects/${name}.jpg`);
    } catch (e) {
      console.error(`Could not find image for project ${name}`);
    }
  }

  return (
    <div className="project" key={name}>
      <img src={projectImg} alt={removeHyphensAndCapitalize(name)}
      className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;