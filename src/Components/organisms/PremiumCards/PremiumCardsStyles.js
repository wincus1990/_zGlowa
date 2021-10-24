import styled from "styled-components";

export const PremiumCardsWrapper = styled.div`
    min-height: 50vh;
    border: 3px solid white; 
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.lightGrey };;
    overflow-x: auto;
   
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