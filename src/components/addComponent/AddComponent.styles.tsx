import styled from "styled-components"

 const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    heigh: 400px;
    margin: 2rem;
    padding: 1.5rem;
    border-radius: 5px;
`;

 const Input = styled.input`
    display: flex;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 2rem 0;
    color: #000000;
    font-size: 1.6rem;
    padding: 1.2rem;
`;

 const Button = styled.button<{display:boolean}> `
    color: #FBFCFC;
    font-size: 1.8rem;
    text-align: center;
    background-color: #B3B6B7;
    padding: 0.5rem;
    border-radius: 5px;
    width: 100%;
    display: ${props => props.display ? "none" : "flex"}
`;

 const Span = styled.span`
    font.size: 1rem;
    color: red;
    text-transform: lowercase;
`;

export {Container,Input, Button, Span}