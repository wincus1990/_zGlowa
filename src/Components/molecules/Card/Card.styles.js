import styled from "styled-components";

export const CardWrapper = styled.div`
    min-width: ${({ width }) => width };
    margin: ${({ margin }) => margin };
    background-color: ${({ theme })=> theme.white };
    width: 330px;
    height: 378px;
    -webkit-box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    -moz-box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    padding: 15px;

    @media (max-width: 768px) {
        margin-bottom: 2%;
        width: 100%;
        height: 378px;
    }
 
    img {
        background-repeat: no-repeat;
        background-size: cover; 
        background-position: center center;
        margin: 0 auto;
        width: 100%;
        height: 75%;
        background-color: white;
        outline: none;   
    }
`
export const ItemName = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xxs };
    font-weight: ${({ theme }) => theme.medium };

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.mainBlue };
        text-decoration: underline 1px solid ${({ theme }) => theme.mainBlue };
    }
`

export const ItemLocalization = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xxxs };
`

export const ItemPrice = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xxxs };
    padding-right: 27%;
`

export const Bottom = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    img {
        display: block;
        width: 7%;
        height: 100%;
        margin: 0 auto;
    }

    p {
        display: block;
        font-size: ${({ theme }) => theme.fontSize.xxxs };
        color: ${({ theme }) => theme.mainBlue };

        &:hover {
            cursor: pointer;
        }
    }
`