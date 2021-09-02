import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';
import nextId from 'react-id-generator';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };
  addContact = e => {
    e.preventDefault();
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          name: prev.name,
          id: nextId(),
        },
      ],
      name: '',
    }));
  };
  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <h3>Name</h3>
        <form onSubmit={this.addContact}>
          <input
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.addContact}>
            Add contact
          </button>
        </form>

        <Contacts title="Contacts" data={contacts} />
      </>
    );
  }
}
