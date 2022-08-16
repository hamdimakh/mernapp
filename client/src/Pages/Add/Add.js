import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addContact } from '../../JS/Actions/contact'

const Add = () => {
    const [newContact, setNewContact] = useState({ name:"", email:"", phone:"" })
    const dispatch =  useDispatch()

    const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name]: e.target.value})
    }

    const add = () => {
        dispatch(addContact(newContact))
    }
    return (
        <div>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" value={newContact.name} onChange={handleChange} />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={newContact.email} onChange={handleChange} />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" name="phone" value={newContact.phone} onChange={handleChange} />
            <Link to="/users"> <Button variant="primary" type="submit" onClick={() => add()} > submit </Button> </Link> 
        </div>
    )
}

export default Add