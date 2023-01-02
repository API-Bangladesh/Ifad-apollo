import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLogo from '../../../asset/images/logo/LOGO.png';
import {AiOutlineSearch} from 'react-icons/ai';
import Number from '../../../asset/images/footer/contact.png';

const Manubar = () => {

    return (
        <Fragment>
            <header id="header">
                <Navbar bg="light" expand="lg" className='py-3'>
                    <Container fluid className='px-3 px-lg-5'>
                        <Navbar.Brand>
                            <Link to='/'>
                                <img className='nav_logo'
                                    src={NavLogo}
                                    alt="img"/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" 
                            activeKey="/home"
                            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>

                                <Nav.Item>
                                    <Link className='nav-link active' to='/'>Home</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='nav-link' to='/about_product'>Products</Link>
                                </Nav.Item>
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item to="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item to="#action/3.4">
								Separated link
							</NavDropdown.Item>
							</NavDropdown> */}
                                <Nav.Item>
                                    <Link className='nav-link' to='/about_product'>Dealer</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='nav-link' to='/about_product'>News & Events</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='nav-link' to='/about_us'>About US</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className='nav-link' to='/about_product'>Contact</Link>
                                </Nav.Item>
                            </Nav>
                            <Form className="d-flex flex-column  align-items-lg-end  align-items-center">
                                <InputGroup className="mb-1">
                                    <Form.Control className="ps-3 pe-4 searchBox" placeholder="SEARCH"/>
                                    <AiOutlineSearch className='searchIcon'/>
                                </InputGroup>
                                <div className="hotline">
                                    <Link to="#">
                                        <img src={Number}
                                            alt=""
                                            className="ms-2 hotNumber"/>
                                    </Link>
                                </div>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </Fragment>
    );
}

export default Manubar;
