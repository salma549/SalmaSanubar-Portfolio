import React from 'react'
import { darkTheme } from "./utils/Themes";
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import SocialLinks from './components/SocialLinks'


import Contact from './components/Contact'
import StartCanvas from "./components/canvas/Stars";
import styled, { ThemeProvider } from "styled-components";
import Projects from './components/Projects';
import Skills from './components/Skills';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  
 
`;





function App() {
  return (
    <ThemeProvider theme={darkTheme}>
  
  <NavBar/>
      <Body>
        
      <Home />
      <About />

  
      <SocialLinks />
    <Projects/>
     
   <Skills/>
      <Contact/>
     
     

      <StartCanvas />
    
      </Body>
    
    </ThemeProvider>

  )
}

export default App