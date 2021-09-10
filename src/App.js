import React from 'react';
import NavBar from './components/navbar';
import AboutMe from './components/AboutMe';
import Form from './components/Form';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'


function App() {
  return (
  <div>
  <NavBar/>
  <AboutMe/>
  <Form/> 
  <Portfolio/>
  <Resume/>
  </div>
  );
}

export default App;

