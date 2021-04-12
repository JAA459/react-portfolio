import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './Components/Home/index';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

const project = [
  {
    id: 1,
    name: "Burger App",
    image: "/assets/images/burgerResize.jpg",
  },
  {
    id: 2,
    name: "PitchATent",
    image: "/assets/images/pitchResize.jpg",
  },
  {
    id: 3,
    name: "Budget Tracker App",
    image: "/assets/images/budgetResize.jpg",
  },
  {
    id: 4,
    name: "Inventory App",
    image: "/assets/images/inventoryResize.jpg",
  },
  {
    id: 5,
    name: "Fitness Tracker",
    image: "/assets/images/fitnessResize.jpg",
  },
  {
    id: 6,
    name: "Note Taker App",
    image: "/assets/images/noteResize.jpg",
  }
]

function App() {
  return (
    <div className="App">
   <Index />
   <About />
   <Skills />
   <Projects project={project} />
   <Contact />
    </div>
  );
}

export default App;
