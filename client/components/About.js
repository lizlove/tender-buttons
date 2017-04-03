import React, {PropTypes} from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <div>
          <div className="field">
           <p className="about">We recover data from obsolete formats</p>
           <p className="about">and help you plan for the long-term</p>
           <p className="about">preservation of your digital information.</p>
          </div>
          <ul className="formats">
            <li>Audio</li>
            <li>Documents</li>
            <li>Email</li>
            <li>Games</li>
            <li>Images</li>
            <li>Software</li>
            <li>Video</li>
            <li>And Other Born-Digital Materials</li>
          </ul>
          <ul className="actions">
            <li><a href="#" className="button">Contact Us</a></li>
          </ul>
          <div className="field">
           <p className="about name"><a href="https://en.wikipedia.org/wiki/Tender_Buttons_(book)">The name</a></p>
         </div>
        </div>
        <hr />
      </div>
    );
  }
}
