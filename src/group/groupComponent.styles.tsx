import styled from "styled-components";

const Card = styled.div`
    background: white;
    width: 350px;
    padding: 1rem;
    margin: 1rem 1.5rem;
    border-radius: 0.3rem;
    /** Shadows from the awesome tailwindcss *wink* *wink* **/
    --tw-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
    box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
`;

const BgCard = styled.div`
    background: white;
    width: 250px;
    padding: 1rem;
    border-radius: 0.3rem;
    border: 0.5px dashed rgba(0,0,0,0.35);
`;

const List = styled.div`
    padding: 0.5rem
`;

const Bar = styled.div.attrs((props : any) => ({
    type : props.type || 'solid',
    color: props.color || 'rgb(87, 83, 83)'
}))`
    border-bottom: 1px ${props => props.type} ${props => props.color};
    margin: 10px auto;
`;

const Title = styled.h2.attrs((props : any) => ({
    textAlign : props.textAlign || 'center',
    color : props.color || "black",
    fontSize : props.fontSize || "1.5rem"
}))`
    margin: 0.5rem 0;
    padding: 0.5rem;
    color: ${ props => props.color };
    text-align : ${ props => props.textAlign };
    font-size : ${ props => props.fontSize };
`;

export { Card, BgCard, List, Bar, Title };