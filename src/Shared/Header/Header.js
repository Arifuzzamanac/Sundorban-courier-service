import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Sundorban Curier</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className='text-white' to="/home#home">Home</Nav.Link>

                        {
                            user?.displayName ? <Nav.Link as={HashLink} className='text-white' to="/myservice">My Service</Nav.Link> : <Nav.Link as={HashLink} className='text-white' to="/home#services">Services</Nav.Link>
                        }

                        {user?.displayName ?
                            <div onClick={logOut} className="btn btn-secondary">Logout</div>
                            :
                            <Nav.Link as={Link} className='text-white' to="/login">Login</Nav.Link>}

                        <Navbar.Text>
                            Welcome Dear: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;