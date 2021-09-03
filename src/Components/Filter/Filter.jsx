import React from 'react';

function Filter({ value, onChange }) {
  return (
    <>
      <h3>Find Contacts by name</h3>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
}

export default Filter;
