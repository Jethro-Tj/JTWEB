import brawler from './projectfight.png';
import envi from './envirothon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="LeftB">
        <h1 className="Title">JETHRO TEDJOSOESILO</h1>
        <h2 className="word">I am a first year Math Honors student at the University Of Waterloo. Currently, I am pursuing a career in Software Engineering. My courses are oriented to develop my programming capabilities and skills. This is my personal website where I showcase my projects and provide some ways to know more about me.</h2>
      </div>

      <div className="RightB">
        <h1 className="ProjTitle">Projects</h1>
        <div className="Project1">
        <a href="https://github.com/Jethro-Tj/FighterGame" target="_blank">
          <img className="images" src={brawler} alt="Fighting Game Project" height="180"></img>
        </a>
          <p className="projtext1">This is my second Pygame project. It is a fighting game based of old-school retro games like Street-Fighter or Tekken. The game makes use of many Object Oriented Programming features to properly encapsulate each factor of the game. I followed a tutorial on Youtube titled "Street Fighter Style Fighting Game in Python using Pygame - Complete Tutorial".</p>
        </div>
        <div className="Project2">
        <a href="https://github.com/Jethro-Tj/Envirothon" target="_blank">
          <img className="images" src={envi} alt="Envirothon" height="180"></img>
        </a>
          <p className="projtext1">The project you see here is my first ever hackathon project. My friends and I joined the "Envirothon" and designed a game in order to increase awareness for the environment. I guided my team and divided tasks among them. I was in charge of programming the game while they were in charge of aspects such as the character design and backgrounds. The tutorial I followed is titled "Pygame Tutorial - Creating Space Invaders" on YouTube.</p>
        </div>
        <div className="bottomright">
          <a href="https://www.linkedin.com/in/jethro-tedjo" target="_blank"><span>LinkedIn</span></a>
          <a href="https://github.com/Jethro-Tj" target="_blank"><span>GitHub</span></a>
        </div>
      </div>
      
    </div>
  );
}

export default App;
