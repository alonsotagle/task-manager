import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import { VisibleTaskList } from './';


class History extends Component {

  componentWillMount = () => {
    this.props.dispatch(setVisibilityFilter("SHOW_COMPLETED"));
  }

  render() {
    return (
      <VisibleTaskList />
    );
  }
}

export default withRouter(connect()(History));
