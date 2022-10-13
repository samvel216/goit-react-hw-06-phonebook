import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsActions from '../../redux/contactsActions';
export function ContactForm({ data }) {
  const [name, setName] = useState('name', '');
  const [number, setNumber] = useState('number', '');
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    console.log(data);
    if (!data.some(element => element.name === name)) {
      dispatch(contactsActions.addContacts({ name, number }));
    } else {
      alert('Мы ебемся в попку!');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={evt => setName(evt.target.value)}
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={evt => setNumber(evt.target.value)}
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}
