import './App.css';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import resumeData from './components/resume/resumeData';

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
