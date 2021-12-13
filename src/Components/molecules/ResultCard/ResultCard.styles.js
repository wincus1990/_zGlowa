import styled from "styled-components";
import { fadeIn } from 'Components/molecules/Modal/Modal.styles.js';

export const CardWrapper = styled.div`
    font-family: 'Mulish', sans-serif;
    min-width: ${({ width }) => width };
    margin: ${({ margin }) => margin };
    background-color: ${({ theme })=> theme.white };
    transition-duration: 250ms;
    width: 100%;
    height: 250px;
    -webkit-box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    -moz-box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    display: flex;
    align-items: left;
    padding: 8px;
    margin: 1% 0;
    border-radius: 5px;
    animation: ${ fadeIn } 0.3s ease-in;

    @media (max-width: 768px) {
        margin-bottom: 2%;
        width: 90vw;
        min-height: 200px;
        margin: 2% 0;
    }
 
    img {
        margin: 0;
        min-width: 45%;
        height: 100%;
        background-color: white; 
        object-fit: cover;
        outline: 0;
    }

    &:hover{
        -webkit-box-shadow: 1px 0px 8px -1px rgba(23, 23, 29, 1);
        -moz-box-shadow: 1px 0px 8px -1px rgba(23, 23, 29, 1);
        box-shadow: 1px 0px 8px -1px rgba(23, 23, 29, 1);
    }
`

export const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    align-items: left;
    height: 100%;
    width: 100%;
    padding: 15px;
    
    span{
        color: black;
        display: inline-block;
    }

    div{
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: left;

        &:hover{
            cursor: pointer;
        }
    }
`

export const ItemName = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xxs };
    font-weight: ${({ theme }) => theme.bold };
    color: ${({ theme }) => theme.mainBlue };
    padding-bottom: 4%;
    border-bottom: 1px solid ${({ theme }) => theme.mediumGrey };

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