import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <React.Fragment>
                <Navbar color="dark" light  sticky="top">
                    {/* className="container mx-auto text-center"*/}
                    {/*col col-md-6 col-lg-4*/}
                        <Nav className="mx-auto row col col-sm-7 col-lg-3">
                            <NavItem className="col-6">
                                <Link to="/home" style={{color: 'white', textDecoration: 'none' }}>Home</Link>
                            </NavItem>
                            
                            <NavItem className="col-6">
                                <Link to="/history" style={{color: 'white', textDecoration: 'none' }}>History</Link>
                            </NavItem>
                        </Nav>
                    
                </Navbar>

            </React.Fragment>
            

        );
    }

}

export default Header;