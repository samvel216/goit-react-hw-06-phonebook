import { deleteContacts, addContacts } from './contactsActions';
import { createReducer } from "@reduxjs/toolkit";
const contact = createReducer([
    { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
    { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
    { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
    { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
], {
    [deleteContacts]: (state, action) => state.filter(element => element.id !== action.payload),
});

export default contact;