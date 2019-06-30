import styled from 'styled-components';

export const InputArea = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

export const ContentArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;
`;

export const InputField = styled.input`
    height: 25px;
    border-radius: 4px;
    width: 300px;
`;

export const InputButton = styled.button`
    height: 30px;
    width: 100px;
    margin-top: 2px;
    margin-left: 10px;
    background-color: #52adfd;
    cursor: pointer;
    &:hover {
        background: #258eab;
    }
    &:active {
        transform: translateY(-5px);
    }
`;