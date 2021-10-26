import styled from "styled-components";

export const CardWrapper = styled.div`
    min-width: ${({ width }) => width };
    margin: ${({ margin }) => margin };
    background-color: ${({ theme })=> theme.white };
    width: 600px;
    height: 220px;
    -webkit-box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    -moz-box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    display: flex;
    align-items: left;
    padding: 5px;
    margin: 2% 0;

    @media (max-width: 768px) {
        margin-bottom: 2%;
        width: 100%;
        height: 378px;
    }
 
    img {
        background-repeat: no-repeat;
        background-size: cover; 
        background-position: center center;
        margin: 0;
        width: 75%;
        height: 100%;
        background-color: white;
        outline: none;   
    }

    &:hover{
        -webkit-box-shadow: 0px 0px 9px 4px rgba(75, 79, 113, 1);
        -moz-box-shadow: 0px 0px 9px 4px rgba(75, 79, 113, 1);
        box-shadow: 0px 0px 9px 4px rgba(75, 79, 113, 1);
    }
`

export const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: left;
    height: 100%;
    width: 100%;
    padding: 15px;

    li{
        color: ${({ theme }) => theme.mediumGrey };
        margin-left: 5%;

        span{
            color: black;
            display: inline-block;
        }
    }

    div{
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: left;
    }
`

export const ItemName = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xxxs };
    font-weight: ${({ theme }) => theme.bold };

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
    font-weight: ${({ theme }) => theme.bold };
    padding-right: 27%;
`