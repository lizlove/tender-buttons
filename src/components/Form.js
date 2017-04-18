'use strict';

import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  handleMessageSubmit(){
    const body = `Contact Form Submission from: ${this.props.name} at ${this.props.email}. They said: ${this.props.message}.`;
    const username = process.env.MC_USER;
    const password = process.env.MC_PASS;
    console.log(body, username, password);
  }

  render() {
    return (
      <div>
          <h2>Contact Us</h2>
          {this.props.errorMessage ? <p>this.props.errorMessage</p> : null}
          <form method="post" action="#">
            <div className="field">
              <input
                type="text"
                ref='name'
                placeholder="Name"
                value={this.props.name}
                onChange={e => this.props.updateName(e.target.value)}/>
            </div>
            <div className="field">
              <input
                type="email"
                ref="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.props.updateEmail(e.target.value)}/>
            </div>
            <div className="field">
              <textarea
                placeholder="Message"
                ref="message"
                rows="4"
                value={this.state.message}
                onChange={e => this.props.updateMessage(e.target.value)}>
              </textarea>
            </div>
            <div className="field">
              <input
                type="checkbox"
                checked={this.state.isHuman}
                onChange={e => this.updateisHuman("isHuman", e.target.value)}
              />
                <label>I'm a human</label>
            </div>
            <div className="field">
              <label>But are you a robot?</label>
              <input type="radio" id="robot_yes" name="robot"/><label>Yes</label>
              <input type="radio" id="robot_no" name="robot" /><label>No</label>
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
