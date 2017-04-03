import React, {PropTypes} from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <ul className="copyright">
          <li>&copy; Tender Buttons</li>
          <li>NYC</li>
          <li>2017</li>
        </ul>
      </footer>
    );
  }
}
