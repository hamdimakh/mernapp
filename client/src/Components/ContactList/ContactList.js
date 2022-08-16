import React, { useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { getContacts } from '../../JS/Actions/contact';
import Spinner from 'react-bootstrap/Spinner';
import ContactCard from '../ContactCard/ContactCard';

    const ContactList = () => {
    
    const dispatch = useDispatch();
    const listContacts = useSelector (state => state.contactReducer.listContacts);
    const load = useSelector(state => state.contactReducer.load)
    useEffect(() => {
      dispatch (getContacts())
    }, [dispatch])

    return (
      <div>
        { load ?  <Spinner animation="border" variant="info" /> : listContacts.map((el) => <ContactCard contact={el} key={el._id} /> )}
      </div>
  )
}

export default ContactList