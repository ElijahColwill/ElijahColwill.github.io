import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/linkedin-rd' component={() => { 
            window.location.href = 'https://www.linkedin.com/in/elijahcolwill/'; 
            return null;
          }}/>
          <Route path='/github-rd' component={() => { 
            window.location.href = 'https://www.github.com/ElijahColwill/'; 
            return null;
          }}/>
          <Route path='/email-rd' component={() => { 
            window.location.href = 'mailto:elijah.c035@gmail.com'; 
            return null;
          }}/>
          <Route path='/resume-download' component={() => { 
            <a href='../../pdf/resume.pdf' download> download </a>; 
            return null;
          }}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
