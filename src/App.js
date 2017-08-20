import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import AsyncAbout from './components/About';
import AsyncContact from './components/Contact';
import AsyncHome from './components/Home';

const App = () => (
  <Router>
    <div className="is-loading">
      <div id="wrapper">
          <section id="main">
            <header>
              <span className="avatar"><img src="http://elizabethlovero.com/img/tb/images/avatar.jpg" alt="avatar" /></span>
              <h1>Tender Buttons</h1>
              <p>Digital Preservation Consulting</p>
            </header>
            <Route path="/" component={AsyncHome}/>
            <Route path="/about" component={AsyncAbout} />
            <Route path="/contact" component={AsyncContact}/>
            <footer>
              <ul className="icons">
                <li><Link className="fa-home" to="/">Home</Link></li>
                <li><Link className="fa-question" to="/about">About</Link></li>
                <li><Link className="fa-envelope-o" to="/contact">Contact</Link></li>
              </ul>
            </footer>
          </section>
          <footer id="footer">
            <ul className="copyright">
              <li>&copy; Tender Buttons</li>
              <li>NYC</li>
              <li>2017</li>
            </ul>
          </footer>
        </div>
    </div>
  </Router>
);

export default App;
