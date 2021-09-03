import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

function ContactList({ contacts }) {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
