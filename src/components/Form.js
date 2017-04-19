'use strict';
import React from 'react';
import fetch from 'isomorphic-fetch';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(){
    const postData = `Contact from: ${this.props.name}, at: ${this.props.email}. Message: ${this.props.message}.`;
    console.log(postData);
    fetch('/contactus', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(postData)
            })
          	.then(response => response.json())
            .then(data => console.log(`Email has been scheduled`, data))
            .catch((error) => console.error(error))
  }

  handleMessageSubmit(){
    if (this.props.isRobot){
      this.props.emailSendFailure("Sorry, robots not allowed.");
    } else if (!this.props.isHuman) {
      this.props.emailSendFailure("Sorry, humans only.");
    } else if (!this.props.email) {
      this.props.emailSendFailure("Sorry, email address required.");
    } else if (!this.props.name) {
      this.props.emailSendFailure("Sorry, name is required.");
    } else {
      this.sendEmail();
    }
  }

  render() {
    return (
      <div>
          <h2>Contact Us</h2>
          {this.props.errorMessage ? <p className="error">{this.props.errorMessage}</p> : null}
          <form>
            <div className="field">
              <input
                type="text"
                ref='name'
                placeholder="Name"
                value={this.props.name}
                required
                onChange={e => this.props.updateName(e.target.value)}/>
            </div>
            <div className="field">
              <input
                type="email"
                ref="email"
                placeholder="Email"
                value={this.props.email}
                required
                onChange={e => this.props.updateEmail(e.target.value)}/>
            </div>
            <div className="field">
              <textarea
                type="text"
                placeholder="Message"
                ref="message"
                rows="4"
                value={this.props.message}
                onChange={e => this.props.updateMessage(e.target.value)}>
              </textarea>
            </div>
            <div className="field">
              <input
                type="checkbox"
                checked={this.props.isHuman}
              />
              <label onClick={e => this.props.updateIsHuman(!this.props.isHuman)}>I'm a human</label>
            </div>
            <div className="field">
              <label>But are you a robot?</label>
              <input
                type="radio"
                id="robot_yes"
                name="robot_yes"
                checked={this.props.isRobot} />
              <label onClick={e => this.props.updateIsRobot(true)}>Yes</label>
              <input
                type="radio"
                id="robot_no"
                name="robot_no"
                checked={!this.props.isRobot} />
              <label onClick={e => this.props.updateIsRobot(false)}>No</label>
            </div>
            <ul className="actions">
              <li><a className="button" onClick={this.handleMessageSubmit}>Get Started</a></li>
            </ul>
          </form>
          <hr />
      </div>
    );
  }
}

module.exports = Form;
