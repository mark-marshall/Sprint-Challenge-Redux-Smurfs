import React from 'react';

export default function Smurfs({ smurfsArray }) {
  return (
    <div>
      {smurfs.map(smurf => (
        <div key={smurf.id}>
          <h2>{smurf.name}</h2>
          <p>age: {smurf.age}</p>
          <p>height: {smurf.height}</p>
        </div>
      ))}
    </div>
  );
}
