import styled from "styled-components";

export const CardsWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.white };;
    overflow-x: scroll;
    overflow-y: hidden;

    @media (max-width: 1080px) {
        display: none;
    }

    //FIREFOX
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.mainBlue } ${({ theme }) => theme.mediumGrey };

    //CHROME
    ::-webkit-scrollbar {
        height: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.mainBlue };
        border: 1px solid ${({ theme }) => theme.mainBlue };
        border-radius: 20px;
    }
`