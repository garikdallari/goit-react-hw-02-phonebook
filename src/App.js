import React, { Component } from 'react';
// import Contacts from './Contacts/Contacts';
import nextId from 'react-id-generator';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
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
          number: prev.number,
        },
      ],
      name: '',
      number: '',
    }));
  };

  filterByName = () => {
    this.setState(prev => ({
      // contacts: prev.contacts.filter(contact => console.log(Object.values(contact)))
      // contacts: prev.contacts.filter(item =>
      //   if (prev.filter === '') {
      //     return prev.contacts
      //   }
      //   return Object.keys(item).some(key => item[key].toLowerCase().includes(prev.filter.toLowerCase()))
      // })
    }));
  };

  twoCalls = e => {
    this.handleChange(e);
    this.filterByName();
  };

  render() {
    const { name, contacts, number, filter } = this.state;
    let search = contacts.filter(contact =>
      Object.keys(contact).some(key =>
        contact[key].toLowerCase().includes(filter.toLowerCase()),
      ),
    );
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.addContact}>
          <h3>Name</h3>
          <input
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
          <h3>Number</h3>
          <input
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />

          <button type="button" onClick={this.addContact}>
            Add contact
          </button>
        </form>

        <h2>Contacts</h2>
        <h3>Find Contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
        />

        <ul>
          {search.map(el => (
            <li key={el.id}>
              {el.name}: {el.number}
            </li>
          ))}
        </ul>

        {/* <Contacts  data={contacts}/> */}
      </>
    );
  }
}
