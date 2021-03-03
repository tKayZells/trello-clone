import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 220px;
    padding: 0.5rem;
`;

export const TopContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const Description = styled.div`
    height: 100%;
    padding: 0.5rem;
    margin: 1rem 0;
`;

export const BottomContainer = styled.div`
    display: flex;
`;

export const Title = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
`;
export const Button = styled.button`
    width: 100%;
    padding: 0.5rem;
    text-transform: uppercase;
    background-color: #B3B6B7;
    color: white;
    border-radius: 5px;
`;

export const Input  = styled.input`
    margin-right: 1rem;
`;