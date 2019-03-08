import React from 'react';

export default function AddSmurf({ addSmurf, changeAddSmurf, fireAddSmurf }) {
  return (
    <div>
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
      <button
      onClick={() => fireAddSmurf(addSmurf)}
      >
        Add Smurf
      </button>
    </div>
  );
}
