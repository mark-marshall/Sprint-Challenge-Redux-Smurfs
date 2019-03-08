import React from 'react';
import PT from 'prop-types';

import './Forms.css';

export default function EditSmurf({
  editMode,
  editSmurf,
  changeEditSmurf,
  fireEditSmurf,
  resetEditSmurf,
}) {
  if (editMode) {
    return (
      <div className="form">
        <input
          name="name"
          type="text"
          placeholder="name"
          value={editSmurf.name}
          onChange={event => changeEditSmurf(event)}
        />
        <input
          name="age"
          type="number"
          placeholder="age"
          value={editSmurf.age}
          onChange={event => changeEditSmurf(event)}
        />
        <input
          name="height"
          type="text"
          placeholder="height"
          value={editSmurf.height}
          onChange={event => changeEditSmurf(event)}
        />
        <button onClick={() => fireEditSmurf(editSmurf)}>Edit Smurf</button>
        <button className="cancel" onClick={() => resetEditSmurf()}>X</button>
      </div>
    );
  } else {
    return <div />;
  }
}

EditSmurf.propTypes = {
  editMode: PT.bool.isRequired,
  editSmurf: PT.shape({
    id: PT.isRequired,
    name: PT.isRequired,
    age: PT.isRequired,
    height: PT.isRequired,
}).isRequired,
  changeEditSmurf: PT.func.isRequired,
  fireEditSmurf: PT.func.isRequired,
  resetEditSmurf: PT.func.isRequired,
}
