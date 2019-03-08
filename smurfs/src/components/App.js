import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSmurfsAsync, addSmurfAsync } from './state/actionCreators';
import './App.css';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfsAsync();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurfsss</h1>
        <Smurfs smurfs={this.props.smurfs} />
        <AddSmurf />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    spinner: state.spinner,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getSmurfsAsync,
      addSmurfAsync,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
