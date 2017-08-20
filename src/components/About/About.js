import React from 'react';

const About = () => {
    return (
      <div>
        <h1>About</h1>
        <div>
          <div className="field">
           <p className="about">We help you plan for the long-term preservation of your digital information.</p>
           <p className="about">Recover data from obsolete formats, digitize your materials, and develop strategies for migration.</p>
          </div>
          <ul className="formats">
            <li><em>We work with all formats:</em></li>
            <li>Audio</li>
            <li>Documents</li>
            <li>Email</li>
            <li>Games</li>
            <li>Images</li>
            <li>Software</li>
            <li>Video</li>
            <li>and anything else</li>
          </ul>
          <div className="field">
           <p style={{fontSize: '12px'}}><a href="https://en.wikipedia.org/wiki/Tender_Buttons_(book)">What's up with the name?</a></p>
         </div>
          <ul className="actions">
            <li><Link className="button" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <hr />
      </div>
    );
  };

export default About;
