import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    background: black;
    /** Shadows from the awesome tailwindcss *wink* *wink* **/
    --tw-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.35);
    box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);

    &:hover {
        background: #393939;
    }

`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
`;

export const Description = styled.div`
    height: 100%;
    padding: 0.5rem;
    margin: 0 0 1rem;
    color: white;
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    text-transform: uppercase;
    color: white;

    /** truncate from the awesome tailwindcss *wink* *wink* god bless tailwindcss **/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 80%;
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