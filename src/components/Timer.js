import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Timer = ({ timer }) => (
  <p>{timer}</p>
);

const mapStateToProps = state => {
  return {
    timer: state.timer,
  }
}

export default withRouter(connect(mapStateToProps)(Timer));
