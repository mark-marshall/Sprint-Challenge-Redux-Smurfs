import React from 'react';

export default function Smurfs({ smurfs, fireDeleteSmurf, setEditSmurfValues }) {
  return (
    <div>
      {smurfs.map(smurf => (
        <div key={smurf.name}>
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
