import React from 'react';

function Contacts({ data }) {
  return (
    <>
      <ul>
        {data.map(el => (
          <li key={el.id}>
            {el.name}: {el.number}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Contacts;
