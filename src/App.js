import React from 'react';
import dancing from './dancing.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>
        <h1 className="hero">Namaste!</h1>
        <h2 className="intro">I am Dilip Pitchika</h2>
        <h3 className="current">Associate product manager at IMImobile, Hyderabad</h3>
        <p className="info">Hey, great to see you here.  I have been working since the past 8 months as the associate product manager for IMI’s bot building platform for enterprises, which serves the likes of a major furniture retail store in the UK and a large government organization in Dubai.</p>
        <p className="info">I was previously a designer within IMI entrusted with the creating a seamless experience for building bots within IMI. I helped my team build a consistent interface adapting an existing design system to fit our needs.</p>
        <p className="info">I graduated from Indian Institute of Technology, Kharagpur as a with a Bachelor’s and Master’s degree in Mechanical Engineering in 2018. I am in the active pursuit of heist novels, movies and television shows and I enjoy cooking and jamming on my ukuelele.</p>
        <div className="buttonsHolder">
          <a className="homeButton" href="https://www.linkedin.com/in/dilip-pitchika" target="_blank">LinkedIn</a>
          <a className="homeButton">Resume</a>
        </div>
        </div>
        <div className="imageHero"> 
          <img src={dancing}/>
      </div>
        </div>
      </div>
  );
}

export default App;
