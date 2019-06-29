import styled from 'styled-components';

export const HeaderContent = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-around;
`;

export const LinkButton = styled.div`
    height: 30px;
    width: 150px;
    background: #52adfd;
    border-radius: 5px;
    border: 1px solid #1fa1c5;
    cursor: pointer;
    &:hover {
        background: #258eab;
    }
    &:active {
        transform: translateY(-5px);
    }
`;