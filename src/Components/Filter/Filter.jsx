import React from 'react';

function Filter({ title, value, onChange }) {
  return (
    <>
      <h3>{title}</h3>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
}

export default Filter;
