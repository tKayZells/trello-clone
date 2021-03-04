import React from 'react'
import {NavbarContainer, Title, P, Div} from "./Navbar.styles"
import PersonIcon from '@material-ui/icons/Person';
import { useAuth } from "../../common/auth.context";

const Navbar = () => {
    const auth = useAuth();
    console.log(auth)
    return (
        <NavbarContainer>
            <Title>trello</Title>
            <Div>
                <PersonIcon fontSize='large'/>
                <P>{auth.user}</P>
            </Div>      
        </NavbarContainer>
    )
}

export default Navbar
