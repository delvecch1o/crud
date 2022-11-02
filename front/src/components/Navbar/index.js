import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor, LogoutButton } from './styles'

function Navbar() {
    const history = useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/logout').then(res => {
            if (res.data.status === 200) {

                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "Sucesso");
                history.push('/login');

            } else {

            }

        });
    }

    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <UlList>

                <ListItem><Anchor href="/login">Login</Anchor></ListItem>
                <ListItem><Anchor href="/register">Register</Anchor></ListItem>

            </UlList>
        )

    } else {

        AuthButtons = (
            <ListItem>
                <LogoutButton type="button" onClick={logoutSubmit}>Sair</LogoutButton>
            </ListItem>
        )

    }


    return (

        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Crud de Milhões</LogoText>
                </Logo>

                <UlList>
                    <ListItem><Anchor href="/">Home</Anchor></ListItem>
                    <ListItem><Anchor href="/registros">Registros</Anchor></ListItem>
                    <ListItem><Anchor href="/contact">Contact</Anchor></ListItem>

                    {AuthButtons}

                </UlList>

            </div>
        </NavbarSection>

    )
}

export default Navbar;
