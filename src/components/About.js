import React from "react";
import Links from './Links';

function About(prop) {
  console.log(prop)
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {prop.bio ? <p>{prop.bio}</p> : null}
      <Links github={prop.links.github} linkedin={prop.links.linkedin}/>
    </div>
  );
}

export default About;
