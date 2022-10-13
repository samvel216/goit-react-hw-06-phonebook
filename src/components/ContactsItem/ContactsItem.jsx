import { useDispatch, useSelector } from 'react-redux';
import * as contactsActions from '../../redux/contactsActions';
export function ContactItem({ contactId, name, number }) {
  const dispatch = useDispatch();
  return (
    <>
      <p>
        {name}: {number}{' '}
      </p>
      <button
        type="button"
        onClick={() => dispatch(contactsActions.deleteContacts(contactId))}
      >
        Delete
      </button>
    </>
  );
}
