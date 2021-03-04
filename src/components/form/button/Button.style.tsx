import styled from "styled-components";

const InputButton = styled.input.attrs((props :any) =>({
    bg : props.bg || 'black',
    color: props.color || 'white',
    hoverColor : props.hoverColor || '#3a3a3a'
}))`
    background: ${ props => props.bg };
    color: ${ props => props.color };
    padding: 0.5rem 1rem;
    align-self: flex-end;
    cursor: pointer;

    border: none;
    border-radius: 0.3rem;

    &:hover {
        background: ${ props => props.hoverColor };
    }
`;

export default InputButton;