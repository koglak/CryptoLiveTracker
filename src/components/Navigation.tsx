import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navigation: React.FC = () => {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={require('../images/branding.png')}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Crypto Live Tracker
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation;