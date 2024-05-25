import styled from 'styled-components';

export const Cart = styled.div`
    display: flex;
    height: 100%;
    width: 220px;
    align-items: center;
    padding: 0 1rem;
    background-color: #ba7735;
    font-weight: 600;
    color: white;
`;

export const Total = styled.p`
    margin-bottom: 0;
    width: 60%;
    display: flex;
    justify-content: center;
    white-space: nowrap;
`;

export const CartContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
`;

export const Amount = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: .5rem;
`;

export const Divisor = styled.div`
    height: 50%;
    width: .5px;
    margin: 0 1rem;
    background-color: #ffffff81;
`;