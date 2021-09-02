import React from 'react';

function Contacts({ title, data }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Contacts;
