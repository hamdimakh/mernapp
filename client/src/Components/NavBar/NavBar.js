import React from 'react'
import {Nav, Navbar ,Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import { logout } from '../../JS/Actions/user';


const NavBar = () => {
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const dispatch = useDispatch()
    return (
        <header>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">MERN</Navbar.Brand>
            <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            {isAuth ? <Nav.Link  href="/profile" > Profile </Nav.Link> : null }
            {isAuth ?
            (<Link to='/' onClick={() => dispatch(logout())} > <button> Logout </button></Link>)
            :
            (
            <div className='login' >
                <Link to='/login'> <button>Login </button> </Link>
                <Link to='/register'> <button>Register</button> </Link>
            </div>
                )
            }

            
            </Nav>
            </Container>
            </Navbar>
        </header>
    )
}

export default NavBar