import React from 'react'
import {NavbarContainer, Title, P, Div} from "./Navbar.styles"
import PersonIcon from '@material-ui/icons/Person';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Title>trello</Title>
            <Div>
                <PersonIcon fontSize='large'/>
                <P>Usuario</P>
            </Div>      
        </NavbarContainer>
    )
}

export default Navbar
