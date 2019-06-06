import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';
import resumeData from './components/resume/resumeData';
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <Header resumeData={resumeData} />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
