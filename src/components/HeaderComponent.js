import React from 'react'; //needed for React.Fragment
import { Nav, NavItem, Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';


function Header() {
    return(
        <React.Fragment>
            <Navbar color="dark" light  sticky="top">
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
    )
};

export default Header;