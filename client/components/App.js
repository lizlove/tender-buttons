import React, {PropTypes} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './About.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import Home from './Home.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      human: false,
      robot: true,
    }

  }

  handleStateChange(key, value) {
    let newState = Object.assign({}, this.state);
    ObjectUtilities.nestedProperty(newState, key, value);
    this.setState(newState);
  }

  handleMessageSubmit(){
    console.log('submited', this.state);
  }

  render() {
    return (
      <Router>
      <div className="is-loading">
    			<div id="wrapper">
    					<section id="main">
    						<header>
    							<span className="avatar"><img src="http://elizabethlovero.com/img/tb/images/avatar.jpg" alt="avatar" /></span>
    							<h1>Tender Buttons</h1>
    							<p>Digital Preservation Consulting</p>
    						</header>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact}/>
    						<footer>
    							<ul className="icons">
                    <li><Link className="fa-home" to="/">Home</Link></li>
    								<li><Link className="fa-question" to="/about">About</Link></li>
    								<li><Link className="fa-envelope-o" to="/contact">Contact</Link></li>
    							</ul>
    						</footer>
    					</section>
              <Footer />
    			</div>
    	</div>
    </Router>
    );
  }
}
