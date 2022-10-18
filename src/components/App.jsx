import { React } from 'react';
import styled from 'styled-components';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'redux/contacts-actions';
import { changeFilter } from 'redux/filter-actions';
import { getFilteredContacts } from 'redux/contacts-selectors';
import { getFilter } from 'redux/filter-selector';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const newContact = (name, number) => {
    const action = addContact(name, number);
    dispatch(action);
  };

  const removeContact = payload => {
    dispatch(deleteContact(payload));
  };

  const textFilter = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

  return (
    <SectionStyle>
      <Section title="PhoneBook">
        <ContactForm onSubmit={newContact} contacts={contacts} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={textFilter} />
        <ContactList contacts={contacts} onDelete={removeContact} />
      </Section>
    </SectionStyle>
  );
};

export default App;

const SectionStyle = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 15px;
  margin: 70px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  border-radius: 5px;
  background-color: #ebdac1;
`;
