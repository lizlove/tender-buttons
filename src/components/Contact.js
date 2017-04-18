'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import FormContainer from './FormContainer';
import Reducer from './Reducer';

let store = createStore(
  Reducer
);


class Contact extends React.Component {

  render() {
    return (
      <Provider store={store}>
            <FormContainer />
      </Provider>
    );
  }
}

module.exports = Contact;
