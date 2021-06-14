import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume' exact component={Resume} />
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
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
