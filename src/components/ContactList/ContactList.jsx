import { React } from 'react';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-actions';
export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const removeContact = payload => {
    dispatch(deleteContact(payload));
  };
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          {name}: {number}
          <button
            className={styles.button}
            type="button"
            onClick={() => removeContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
