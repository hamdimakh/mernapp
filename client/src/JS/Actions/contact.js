// 1 Importation
import axios from 'axios';
import { FAIL_CONTACTS, GET_CONTACT, GET_CONTACTS, LOAD_CONTACTS } from '../ActionTypes/contact';


// GET all contacts
export const getContacts = () => async (dispatch) => {
    dispatch({type: LOAD_CONTACTS})
    
    try {
        let result = await axios.get('/api/contact/all');
        dispatch({ type: GET_CONTACTS, payload: result.data}); 
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response})
    }
}
// ADD contact
export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post('/api/contact/add', newContact)
        dispatch(getContacts())
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response})
    }
}


// DELETE contact
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response})
    }
}

// EDIT contact
export const editContact = (id, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contact/${id}`, newContact)
        dispatch(getContacts())
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response})
    }
}


// GET one contact
export const getContact = (id) => async (dispatch) => {
    dispatch({type: LOAD_CONTACTS})
    try {
        let result = await axios.get(`/api/contact/${id}`)
        dispatch({type: GET_CONTACT, payload: result.data})
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response})

    }
}





