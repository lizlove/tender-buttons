'use strict';
import React from 'react';
import fetch from 'isomorphic-fetch';

const Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.verifyHumanity = this.verifyHumanity.bind(this);
  }

  sendEmail(){
    const postData = {data: `Contact from ${this.props.name}, at ${this.props.email}. The message is... ${this.props.message}.`};
    fetch('http://localhost:8080/contactus', {
              method: 'POST',
              body:  JSON.stringify(postData),
              headers: {
                'Content-Type': 'application/json',
              },
              mode: 'no-cors'
            })
          	.then(response => console.log('DID THIS'))
            .then(data => this.props.emailSendSuccess())
            .catch(error => this.props.emailSendFailure("Sorry, an error has occured. Please try again"))
  }

  verifyHumanity(){
    switch (this.props){
      case isRobot:
        return "Sorry, robots not allowed.";
        break;
      case !isHuman:
        return "Sorry, humans only.";
        break;
      case !email:
        return "Sorry, email address required.";
        break;
      case !name:
        return "Sorry, name is required.";
        break;
      default:
        return true;
        break;
      }
  }

  handleMessageSubmit(){
    let humanity = this.verifyHumanity;
    humanity ? this.sendEmail() : this.props.emailSendFailure(humanity);
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
              <li><a className="button" onClick={this.handleMessageSubmit}>Submit</a></li>
            </ul>
          </form>
          <hr />
      </div>
    );
  }
}

export default Form;
