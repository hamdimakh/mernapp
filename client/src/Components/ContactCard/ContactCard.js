import React from 'react'
import {Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteContact } from '../../JS/Actions/contact'

const ContactCard = ({contact}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> {contact.name}  </Card.Title>
                    <Card.Text> {contact.email}  </Card.Text>
                    <Card.Text> {contact.phone}  </Card.Text>
                    <Button onClick={() => navigate(`/edit/${contact._id}`)} variant="primary" style={{marginRight:'10px'}} > Edit </Button>
                    <Button variant="primary" onClick={() => dispatch(deleteContact(contact._id))} > Delete</Button>
        </Card.Body>
    </Card>
        </div>
    )
}

export default ContactCard
