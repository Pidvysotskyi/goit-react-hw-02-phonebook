import { InputForm } from './InputForm/InputForm';
import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = newData => {
    const { contacts } = this.state;
    newData.id = nanoid();
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newData.name.toLowerCase()
      )
    ) {
      alert(`${newData.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newData],
      }));
    }
  };

  contactDeleteHandler = contactId => {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(({ id }) => {
      return id !== contactId;
    });
    this.setState({
      contacts: filteredContacts,
    });
  };
  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normilizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizeFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>PhoneBook</h1>
        <InputForm onSubmit={this.formSubmitHandler} />
        {contacts.length > 0 && <h2>Contacts</h2>}
        {contacts.length > 0 && (
          <Filter filterValue={filter} onValueChange={this.changeFilter} />
        )}
        <Contacts
          contacts={visibleContacts}
          onDelete={this.contactDeleteHandler}
        />
      </div>
    );
  }
}
