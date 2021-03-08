import styled from "styled-components"

export const NavbarContainer =  styled.nav`
    width: 100%;
    border-bottom: 0.5px dashed rgba(0,0,0,0.35);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 1.5rem;
    text-align: center;
`;

export const Title = styled.h1`
    padding:0 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    border-left: 0.5px dashed rgba(0,0,0,0.35);
    border-right: 0.5px dashed rgba(0,0,0,0.35);
`;

export const Div = styled.div`
    display: flex;
    position: relative;
`;

export const P = styled.p`
    font-size: 0.7rem;
    margin-right: 2rem;
    position: absolute;
    bottom: 12px;
    left: 30px;
`;


