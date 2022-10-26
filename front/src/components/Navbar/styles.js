import styled from 'styled-components'

export const NavbarSection = styled.div`
    padding: 5px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border=bottom: px solid #000;

`

export const Logo = styled.div`
    width: 50%;
    float: left;
`
export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
`

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
`
export const ListItem = styled.li`
    display: inline-block;
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;

    &:hover{
        color: #eb5424;
    }
`

export const LogoutButton = styled.button`
    width: 100%;
    background-color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
    &:hover{
        color: white;
    }


`;



