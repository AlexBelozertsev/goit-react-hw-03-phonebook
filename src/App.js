import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Layout from './components/Layout';
import Title from './components/Title';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const persistedData = JSON.parse(localStorage.getItem('contacts'));
    if (persistedData) {
      this.setState({ contacts: [...persistedData] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  formSubmitHandler = data => {
    const checkDublicat = this.state.contacts.filter(
      contact => contact.name === data.name,
    );
    if (checkDublicat.length) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  filterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalazedFilter = filter.toLowerCase();
    const filteredContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter),
    );
    return filteredContact.length ? filteredContact : contacts;
  };

  DeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContact = this.getFilteredContact();

    return (
      <Layout>
        <Title text={'Phonebook'} />
        <Form onSubmit={this.formSubmitHandler} />
        {contacts.length > 0 && <Title text={'Contacts'} />}
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.filterChange} />
        )}
        <Contacts list={filteredContact} onDeliteContact={this.DeleteContact} />
      </Layout>
    );
  }
}

export default App;
