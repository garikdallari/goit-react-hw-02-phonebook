import React from 'react';

function ContactItem({ contact }) {
  return (
    <>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
    </>
  );
}

export default ContactItem;
