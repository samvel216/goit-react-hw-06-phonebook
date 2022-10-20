import { createAction } from '@reduxjs/toolkit';

export const deleteContacts = createAction('contacts/deleteContacts');
export const addContacts = createAction('contacts/addContacts');