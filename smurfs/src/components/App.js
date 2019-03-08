import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PT from 'prop-types';

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
    editMode: false,
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
      editMode: false,
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
      },
      editMode: true,
    });
  };

  fireEditSmurf = smurf => {
    this.props.editSmurfAsync(smurf);
    this.resetEditSmurf();
  };

  fireDeleteSmurf = id => {
    this.props.deleteSmurfAsync(id);
  };

  render() {
    if (this.props.error) {
      return (
      <h1>Uh Oh, Smurrrfffd it: {this.props.error}</h1>
      );
    } 
    if (this.props.spinner) {
      return (
        <h1>Hold on a Smurf, loading...</h1>
      );
    }
    else {
      return (
        <div className="App">
          <h1>Smurf village</h1>
          <AddSmurf
            addSmurf={this.state.addSmurf}
            changeAddSmurf={this.changeAddSmurf}
            fireAddSmurf={this.fireAddSmurf}
            editMode={this.state.editMode}
          />
          <EditSmurf
            editSmurf={this.state.editSmurf}
            changeEditSmurf={this.changeEditSmurf}
            fireEditSmurf={this.fireEditSmurf}
            resetEditSmurf={this.resetEditSmurf}
            editMode={this.state.editMode}
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
}

App.propTypes = {
  smurfs: PT.arrayOf(PT.shape({
    id: PT.number,
    name: PT.string.isRequired,
    age: PT.isRequired,
    height: PT.string.isRequired,
  })).isRequired,
  spinner: PT.bool.isRequired,
  error: PT.string,
  getSmurfsAsync: PT.func.isRequired,
  addSmurfAsync: PT.func.isRequired,
  deleteSmurfAsync: PT.func.isRequired,
  editSmurfAsync: PT.func.isRequired,
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
