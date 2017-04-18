import React, {PropTypes} from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      email: '',
      message: '',
      human: false,
      robot: true,
      errorMsg: ''
    }

    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);

  }

  handleMessageSubmit(){
    const body = `Contact Form Submission from: ${this.state.name} at ${this.state.email}. They said: ${this.state.message}.`;
    const username = process.env.MC_USER,
    const password = process.env.MC_PASS;
    console.log(body, username, password);
    // Mailer.send(
    //   { host:           "smtp.mandrillapp.com"
    //   , port:           587
    //   , to:             "elizabethlovero@gmail.com"
    //   , from:           "hello@tenderbuttons.com"
    //   , subject:        "[Tender Buttons] Contact Form Submission"
    //   , body:           body
    //   , authentication: "login"
    //   , username:       username
    //   , password:       password
    //   }, function(err, result){
    //     if(err){
    //       console.log(err);
    //     }
    //   }
    // );
  }

  handleStateChange(key, value) {
    let newState = Object.assign(this.state, {key: value});
    this.setState(newState);
  }

  render() {
    let error = this.state.errorMsg ? <p>this.state.errorMsg</p> : null;
    return (
      <div>
          <h2>Contact Us</h2>
          {error}
          <form method="post" action="#">
            <div className="field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={e => this.handleStateChange("name", e.target.value.trim())}
              />
            </div>
            <div className="field">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={e => this.handleStateChange("email", e.target.value.trim())}
              />
            </div>
            <div className="field">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                onChange={e => this.handleStateChange("message", e.target.value.trim())}>
              </textarea>
            </div>
            <div className="field">
              <input
                type="checkbox"
                name="human"
                checked={this.state.human}
                onChange={e => this.handleStateChange("human", e.target.value)}
              />
                <label>I'm a human</label>
            </div>
            <div className="field">
              <label>But are you a robot?</label>
              <input type="radio" id="robot_yes" name="robot"/><label>Yes</label>
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
