import { createReducer } from '@reduxjs/toolkit'

import { addContact, deleteContact } from './contacts-actions'

const nameExists = (store, payload) => {
  const contactFound = store.find(
    contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
  );
  if (contactFound !== undefined) {
      alert(`Contact ${payload.name} already exist`)
      return true;
    }
    return false;
};

const contactReducer = createReducer([], {
    [addContact.type]: (store, {payload}) =>  nameExists(store, payload) ? [...store] : [...store, payload],
    [deleteContact]: (store, {payload}) => store.filter(contact => contact.id !== payload)
});


export default contactReducer;