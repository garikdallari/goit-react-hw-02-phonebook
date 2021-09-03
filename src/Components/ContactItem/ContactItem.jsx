import React from 'react';
import PropTypes from 'prop-types';

function ContactItem({ contact }) {
  return (
    <>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
    </>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactItem;
