import React from 'react';
import PropTypes from 'prop-types';

function Filter({ title, value, onChange }) {
  return (
    <>
      <h3>{title}</h3>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
