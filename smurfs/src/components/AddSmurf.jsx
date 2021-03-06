import React from 'react';
import PT from 'prop-types';

import './Forms.css';

export default function AddSmurf({
  editMode,
  addSmurf,
  changeAddSmurf,
  fireAddSmurf,
}) {
  if (!editMode) {
    return (
      <div className="form">
        <input
          name="name"
          type="text"
          placeholder="name"
          value={addSmurf.name}
          onChange={event => changeAddSmurf(event)}
        />
        <input
          name="age"
          type="number"
          placeholder="age"
          value={addSmurf.age}
          onChange={event => changeAddSmurf(event)}
        />
        <input
          name="height"
          type="text"
          placeholder="height"
          value={addSmurf.height}
          onChange={event => changeAddSmurf(event)}
        />
        <button onClick={() => fireAddSmurf(addSmurf)}>Add Smurf</button>
      </div>
    );
  }
  else {
      return (
          <div></div>
      )
  }
}

AddSmurf.propTypes = {
    editMode: PT.bool.isRequired,
    addSmurf: PT.shape({
        name: PT.isRequired,
        age: PT.isRequired,
        height: PT.isRequired,
    }).isRequired,
    changeAddSmurf: PT.func.isRequired,
    fireAddSmurf: PT.func.isRequired,
}
