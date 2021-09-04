import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Utils/Title/Title';
import Input from '../Utils/Input/Input';

function Filter({ value, onChange }) {
  return (
    <>
      <Title size={16} text="Find contacts in contact list..." />
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
