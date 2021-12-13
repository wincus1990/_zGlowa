import styled from "styled-components";
import Header from "Components/atoms/Header/Header";
import Paragraph from 'Components/atoms/Paragraph/Paragraph';

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
`

export const UserInformation = styled.div`
    width: 50%;

    @media (max-width: 1080px) {
        display: block;
        width: 95vw;
        padding: 0 15%;
    }
`

export const ResultsContainer = styled.div`
    width: 100%;

    @media (max-width: 1080px) {
        display: block;
        width: 90vw;
    }
`

export const Heading = styled(Header)`
    padding-left: 1%;
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