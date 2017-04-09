import React, {PropTypes} from 'react';
import About from './About.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="is-loading">
    			<div id="wrapper">
    					<section id="main">
    						<header>
    							<span className="avatar"><img src="http://elizabethlovero.com/img/tb/images/avatar.jpg" alt="avatar" /></span>
    							<h1>Tender Buttons</h1>
    							<p>Digital Preservation Consulting</p>
    						</header>
    						<hr />
                <About />
                <Contact />
    						<footer>
    							<ul className="icons">
    								<li><a href="#" className="fa-question">About</a></li>
    								<li><a href="#" className="fa-envelope-o">Contact</a></li>
    							</ul>
    						</footer>
    					</section>
              <Footer />
    			</div>
    	</div>
    );
  }
}
