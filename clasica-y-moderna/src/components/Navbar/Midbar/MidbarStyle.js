import styled from 'styled-components';

export const Container = styled.div`
    height: 7rem;
    width: 100%;
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    /* flex: 1; */
    height: 100%;
`;

export const SearchContainer = styled.form`
    width: 75%;
    margin: 0 0 0 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled.div`
    width: 80%;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 0 0 1rem;

`;

export const Input = styled.input`
    width: 95%;
    border: none;
    font-size: 15px;
    padding: 15px 0 15px 15px;

    &:focus {
        outline: none;
    }
`;

export const MainButton = styled.button`
    background-color: #85aac5;
    border: 2px solid #85aac5;
    border-radius: 15px;
    padding: 1rem 0;
    margin: 0 20px;
    width: 150px;
    color: #eeeeee;
    font-size: 15px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        background-color: #81b9e0;
        border-color: #81b9e0;
        color: white;
    }
`;

export const ButtonsContainer = styled.div`
    /* flex: 1; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const SecButton = styled.button`
    background-color: transparent;
    border: 1px solid #85aac5;
    padding: 1rem 0;
    color: #85aac5;
    font-size: 15px;
    cursor: pointer;
    width: 180px;
    transition: all .3s ease;

    &:hover {
        background-color: #ffffff2b;
        color: #81b9e0;
        border-color: #81b9e0;
    }
`;