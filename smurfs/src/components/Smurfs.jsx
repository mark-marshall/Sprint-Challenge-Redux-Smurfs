import React from 'react';
import PT from 'prop-types';

import './Smurfs.css';

export default function Smurfs({ smurfs, fireDeleteSmurf, setEditSmurfValues }) {
  return (
    <div className="smurfs">
      {smurfs.map(smurf => (
        <div key={smurf.name} className="smurf">
          <h2>{smurf.name}</h2>
          <p>age: {smurf.age}</p>
          <p>height: {smurf.height}</p>
          <button onClick={() => fireDeleteSmurf(smurf.id)}>Delete</button>
          <button onClick={() => setEditSmurfValues(smurf)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

Smurfs.propTypes = {
    smurfs: PT.arrayOf(PT.shape({
        id: PT.number,
        name: PT.string.isRequired,
        age: PT.isRequired,
        height: PT.string.isRequired,
      })).isRequired,
    fireDeleteSmurf: PT.func.isRequired,
    setEditSmurfValues: PT.func.isRequired,
}
