import styled from "styled-components";
import Header from "Components/atoms/Header/Header";
import Paragraph from 'Components/atoms/Paragraph/Paragraph';
import { fadeIn } from 'Components/molecules/Modal/Modal.styles.js';

export const Wrapper = styled.div`
    position: relative;
    min-height: 60vh;
    width: 80vw;
    margin: 0 auto;
    padding: 2%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    @media (max-width: 1080px) {
        display: flex;
        flex-direction: column;
        width: 95vw;
    }

    h5 {
        color: ${({ theme }) => theme.mainBlue };

        &:hover {
            cursor: pointer;
        }
    }
`

export const UserInformation = styled.div`
    width: 60%;

    @media (max-width: 1080px) {
        padding: 10% 5%;
        width: 90vw;
        order: 1;
    }

    form {
        margin-top: 5%;
        animation: ${ fadeIn } 0.3s ease-in;

        textarea {
            background-color: ${({ theme }) => theme.lightGrey };
            border: none;
            width: 100%;
            height: 100px;
            border-radius: 5px;
        }

        select {
            background-color: ${({ theme }) => theme.lightGrey };
            border: none;
            width: 100%;
            height: 30px;

            &:hover {
                cursor: pointer;
            }
        }
    }
`

export const ResultsContainer = styled.div`
    width: 70%;

    @media (max-width: 1080px) {
        display: block;
        width: 90vw;
        order: 2;
    }
`

export const Heading = styled(Header)`
    padding-left: 1%;
    
    @media (max-width: 1080px) {
        padding-bottom: 3%;
        border-bottom: 1px solid lightgrey;
        text-align: left;
        white-space: nowrap;
        font-size: ${({ theme }) => theme.fontSize.xxs };
    }
`

export const StatusSection = styled.div`
    padding-top: 1%;
    display: flex;

    &:hover{
        cursor: pointer;
    }
`

export const StatusOption = styled(Paragraph)`
    color: ${({ theme }) => theme.darkGrey };
    padding-left: 1%;

    span{
        font-weight: ${({ theme }) => theme.bold };
    }
`

export const StyledFormHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`