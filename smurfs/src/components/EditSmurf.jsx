import React from 'react';

export default function EditSmurf({ editSmurf, changeEditSmurf, fireEditSmurf }) {
    return (
      <div>
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
        <button
        onClick={() => fireEditSmurf(editSmurf)}
        >
          Edit Smurf
        </button>
      </div>
    );
  }