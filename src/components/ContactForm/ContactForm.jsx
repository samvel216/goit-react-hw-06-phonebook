import { React } from 'react';
import { useState } from 'react';
import shortid from 'shortid';

import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-actions';
export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const updateInput = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };
  const submitForm = e => {
    e.preventDefault();
    const newContact = (name, number) => {
      const action = addContact(name, number);
      dispatch(action);
    };
    newContact(name, number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.ContactForm} onSubmit={submitForm}>
      <label className={styles.ContactFormLabel} htmlFor={nameInputId}>
        Name
        <input
          className={styles.ContactFormInput}
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          onChange={updateInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.ContactFormLabel} htmlFor={numberInputId}>
        Phone
        <input
          className={styles.ContactFormInput}
          type="tel"
          name="number"
          id={numberInputId}
          value={number}
          onChange={updateInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.ContactFormButton} type="submit">
        ADD CONTACT
      </button>
    </form>
  );
}
