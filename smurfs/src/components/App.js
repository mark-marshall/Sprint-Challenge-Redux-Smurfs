import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getSmurfsAsync,
  addSmurfAsync,
  deleteSmurfAsync,
} from './state/actionCreators';
import './App.css';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';

class App extends Component {
  state = {
    addSmurf: {
      name: '',
      age: '',
      height: '',
    },
  };

  componentDidMount() {
    this.props.getSmurfsAsync();
  }

  resetAddSmurf = () => {
    this.setState({
      addSmurf: {
        name: '',
        age: '',
        height: '',
      },
    });
  };

  changeAddSmurf = event => {
    this.setState({
      addSmurf: {
        ...this.state.addSmurf,
        [event.target.name]: event.target.value,
      },
    });
  };

  fireAddSmurf = smurf => {
    this.props.addSmurfAsync(smurf);
    this.resetAddSmurf();
  };

  fireDeleteSmurf = id => {
    this.props.deleteSmurfAsync(id);
  };

  render() {
    return (
      <div className="App">
        <h1>Smurfsss</h1>
        <AddSmurf
          addSmurf={this.state.addSmurf}
          changeAddSmurf={this.changeAddSmurf}
          fireAddSmurf={this.fireAddSmurf}
        />
        <Smurfs smurfs={this.props.smurfs} fireDeleteSmurf={this.fireDeleteSmurf} />
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
      deleteSmurfAsync,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
