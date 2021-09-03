import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
