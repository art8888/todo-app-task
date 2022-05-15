import styled from "styled-components";

export const Active = styled.div`
    color: #FFF;
    font-weight:700;
    cursor:pointer;
    padding: .5rem 1rem;
    border: 2px solid #9933CC;
    background-color: #aa66cc;
    width: auto;
    @media (min-width: 61.312em) {
        max-width: 15%;
    }
    margin-bottom:.3125rem;
    border-radius: 3px;
    word-break: break-word;
`;

export const Done = styled.div`
    text-decoration: line-through;
    cursor:pointer;
    color: #FFF;
    font-weight:700;
    cursor:pointer;
    padding: .5rem 1rem;
    border: 2px solid #000;
    background-color: #999;
    width: auto;
    @media (min-width: 61.312em) {
        max-width: 15%;
    }
    margin-bottom: .3125rem;
    border-radius: 3px;
    word-break: break-word;
`;

export const Input = styled.input`
    padding: .5rem 1rem;
    border: 2px solid #0d47a1;
    width: 15%;
    margin-right: .3125rem;
    border-radius: 3px;
`;

export const Button = styled.button`
    padding: .5rem 1rem;
    border: 2px solid #0d47a1;
    background-color: #4285F4;
    color: #FFF;
    margin-right: .3125rem;
    border-radius: 3px;
`;