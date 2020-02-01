import React from 'react';
import dancing from './dancing.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <div className="Nav">
            <h1 className="hero">Namaste!</h1>
            <div className="buttonsHolder">
              <a className="homeButton linkedin" href="https://www.linkedin.com/in/dilip-pitchika" target="_blank">LinkedIn</a>
              <a className="homeButton resume" href="https://drive.google.com/open?id=1yrbDoOYuYi9prae_VMLlFq8ymGxUxHJF" target="_blank">Resume</a>
            </div>
          </div>
      <div className="App-header">
        <div>
          <h2 className="intro">I am Dilip Pitchika</h2>
          <h3 className="current">Product manager at IMImobile, Hyderabad</h3>
          <div class="IMIwork"><a className="pdflink" href="https://www.dropbox.com/s/gaew07beat0k3t9/Idea2.pdf?dl=0" target="_blank"> Check out how i helped get IMIbot more oppurtunities by using a design led thinking here</a></div>
          <p className="info">Hey, great to see you here.  I have been working since the past 9 months as the product manager for IMI’s bot building platform for enterprises, which serves the likes of a major furniture retail store in the UK and a large government organization in Dubai. My tech and design understanding helps me balance feasibility and user needs</p>
          <p className="info">I was <b>previously a designer</b> entrusted with the creation of a seamless experience for building bots within IMI. I helped my team build a consistent interface by adapting an existing design system to fit user and business needs.</p>
          <p className="info">I graduated from <b>Indian Institute of Technology, Kharagpur</b> in 2018 with a dual degree in Mechanical Engineering. I am in the active pursuit of heist novels, movies and television shows. I love to cook appetizers and play hindi songs on my ukulele to unwind.</p>
          <p className= "info">I also build small, random web apps with React and Express JS, while I prefer to use python for small experiments. I also am learning how system design works and how enterprises take business decisions.</p>
          <p className="info">Feel free to reach out to me at <a className="email" href="mailto:dilippitchika@gmail.com">dilippitchika@gmail.com</a></p>
        </div>
        <div className="imageHero"> 
          <img src={dancing}/>
      </div>
      </div>
    </div>
  );
}

export default App;
