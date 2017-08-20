'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from './Form';
import * as actionCreators from './Actions';

function mapStateToProps(state) {
  return {
    name: state.name,
    email: state.email,
    message: state.message,
    isHuman: state.isHuman,
    isRobot: state.isRobot,
    isSent: state.isSent,
    errorMessage: state.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
