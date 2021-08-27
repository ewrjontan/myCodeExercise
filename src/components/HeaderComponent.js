import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <React.Fragment>
                <Navbar color="dark" light  sticky="top" expand="md">
                    <div className="container mx-auto text-center">
                        <Nav className="mx-auto col col-3 d-flex justify-content-around" navbar>
                            <NavItem>
                                <NavLink to="/" style={{color: 'white', textDecoration: 'none' }}>Search</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink to="/history" style={{color: 'white', textDecoration: 'none' }}>History</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>

            </React.Fragment>
            

        );
    }

}

export default Header;