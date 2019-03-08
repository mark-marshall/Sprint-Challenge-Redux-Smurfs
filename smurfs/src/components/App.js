import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getSmurfsAsync,
  addSmurfAsync,
  deleteSmurfAsync,
  editSmurfAsync,
} from './state/actionCreators';
import './App.css';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
import EditSmurf from './EditSmurf';

class App extends Component {
  state = {
    addSmurf: {
      name: '',
      age: '',
      height: '',
    },
    editSmurf: {
      id: '',
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

  resetEditSmurf = () => {
    this.setState({
      editSmurf: {
        id: '',
        name: '',
        age: '',
        height: '',
      },
    });
  };

  changeEditSmurf = event => {
    this.setState({
      editSmurf: {
        ...this.state.editSmurf,
        [event.target.name]: event.target.value,
      },
    });
  };

  setEditSmurfValues = smurf => {
    this.setState({
      editSmurf: {
        id: smurf.id,
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
      }
    })
  }

  fireEditSmurf = smurf => {
    this.props.editSmurfAsync(smurf);
    this.resetEditSmurf();
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
        <EditSmurf
          editSmurf={this.state.editSmurf}
          changeEditSmurf={this.changeEditSmurf}
          fireEditSmurf={this.fireEditSmurf}
        />
        <Smurfs
          smurfs={this.props.smurfs}
          fireDeleteSmurf={this.fireDeleteSmurf}
          setEditSmurfValues={this.setEditSmurfValues}
        />
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
      editSmurfAsync,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
