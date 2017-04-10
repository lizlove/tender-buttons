import React, {PropTypes} from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);

  }
  handleMessageSubmit(){

  }

  render() {
    return (
      <div>
          <h2>Contact Us</h2>
          <form method="post" action="#">
            <div className="field">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
            </div>
            <div className="field">
              <input type="checkbox" id="human" name="human" /><label>I'm a human</label>
            </div>
            <div className="field">
              <label>But are you a robot?</label>
              <input type="radio" id="robot_yes" name="robot" /><label>Yes</label>
              <input type="radio" id="robot_no" name="robot" /><label>No</label>
            </div>
            <ul className="actions">
              <li><a href="#" className="button">Get Started</a></li>
            </ul>
          </form>
          <hr />
      </div>
    );
  }
}

module.exports = Contact;
