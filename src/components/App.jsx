import React, { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  generId = () => shortid.generate();
  updateContacts = (values, actions) => {
    this.setState(prevState => {
      if (prevState.contacts.find(contact => contact.name === values.name)) {
        return alert(`${values.name} is already in contacts`);
      }
      values.id = this.generId();
      actions.resetForm();
      return {
        contacts: [...prevState.contacts, values],
      };
    });
  };
  updateFilter = e =>
    this.setState({
      filter: e.currentTarget.value,
    });
  filterContacts = () => {
    return this.state.contacts.filter(item =>
      item.name.toUpperCase().includes(this.state.filter.toUpperCase())
    );
  };
  deleteContacts = item => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== item.id
    );
    this.setState({
      contacts: newContacts,
    });
  };
  render() {
    this.filterContacts();
    return (
      <>
        <ContactForm showName={this.updateContacts} />
        <h2>CONTACTS</h2>
        <Filter updateFilter={this.updateFilter} />
        {this.state.contacts.length > 0 && (
          <ContactList
            data={this.filterContacts()}
            deleteContact={this.deleteContacts}
          />
        )}
      </>
    );
  }
}
