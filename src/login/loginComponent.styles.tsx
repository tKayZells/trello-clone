import styled from "styled-components";

const Card = styled.div`
    background: white;
    width: 250px;
    padding: 1rem;
    border-radius: 0.3rem;
    /** Shadows from the awesome tailwindcss *wink* *wink* **/
    --tw-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
    box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
`;

const Title = styled.h2`
    margin: 0.5rem 0;
    padding: 0.5rem;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
`

const Label = styled.label`
    color: #9b9b9b;
    font-size: 0.8rem;
    padding: 0.5rem 0;
    text-transform: lowercase;
`;

const Input = styled.input`
    padding: 0.35rem;
    font-size: 1rem;
`;

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

export { Card, Title, InputContainer, Input, Label, InputButton };