import { ContactItem } from '../ContactsItem/ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
export function ContactList({ data }) {
  const value = useSelector(state => state.contact);
  console.log(value);
  return (
    <ul>
      {value.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem contactId={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
