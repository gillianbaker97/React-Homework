import React from 'react';
import NavBar from './components/navbar';
import AboutMe from './AboutMe';
import Form from './Form';
import Portfolio from '/.Portfolio';
import Resume from '/.Resume'

// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
  return <NavBar/>;
};

export default App;

