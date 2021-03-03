import styled from "styled-components";

const InputButton = styled.input`
    background: black;
    color: white;
    padding: 0.5rem 1rem;
    align-self: flex-end;
    cursor: pointer;

    border: none;
    border-radius: 0.3rem;

    &:hover {
        background: #3a3a3a;
    }
`;

export default InputButton;