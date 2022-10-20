import { React } from 'react';
import styled from 'styled-components';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <SectionStyle>
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
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
