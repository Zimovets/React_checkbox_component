import styled from 'styled-components';

export const Card = styled.div`
    heigh: 200px;
`;

export const Image = styled.img`
    heigh: 200px;
`

export const ImageBox = styled.div`
    position: relative;
    heigh: 200px;
`
export const LikeBox = styled.div`
    position: absolute;
    top: 50%;
    right: 20px;
    height: 50px;
    width: 50px;
`;

export const LikeImage = styled.img`
    height: 40px;
    width: 40px;
`;

export const LikeButton = styled.button`
    height: 40px;
    width: 40px;
    background-color: darkgrey;
    border: none;
    outline: none;
    &:active {
        transform: translateY(-2px);
    }
`;

export const LikeAmount = styled.p`

`;