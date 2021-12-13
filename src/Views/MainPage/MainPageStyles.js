import styled, { keyframes } from "styled-components";
import Header from 'Components/atoms/Header/Header.js'

///ANIMATION
export const rotate = keyframes`
    0%
        {
        transform: scale( .75 );
        }
    20%
        {
        transform: scale( 1.1 );
        }
    40%
        {
        transform: scale( .75 );
        }
    60%
        {
        transform: scale( 1.1 );
        }
    80%
        {
        transform: scale( .75 );
        }
    100%
        {
        transform: scale( .75 );
        }
`

export const slideFromLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    20% {
        opacity: 1;
        transform: translateX(0px);
    }
    85% {
        opacity: 1;
        transform: translateX(0px);
    }
    100% {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const StyledWrapper = styled.div`
    padding: 0;
    margin: 0 auto;
    border: 0;
    font-family: 'Mulish', sans-serif;
`

export const StyledSectionContainer = styled.div`
    color: ${({ color }) => color };
    background-color: ${({ bgColor }) => bgColor };
    display: grid;
    max-width: 1400px;
    width: 90%;
    height: 60vh;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;  

    @media (max-width: 1080px) {
        height: 50vh;
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    @media (max-width: 600px) {
        height: 30vh;
    }
`

export const ParagraphHeader = styled(Header)`
    color: ${({ theme }) => theme.darkGrey };
    text-align: left;
    padding: 0 0 3% 0;
`

export const StyledTextContainer = styled.div`
    display: relative;

    @media (max-width: 1080px) {
        display: none;
    }
`

export const ResponsiveBar = styled.div`

    @media (max-width: 1080px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        height: 20vh;
        background-color: ${({ theme }) => theme.lightGrey };
        color: ${({ theme }) => theme.mainBlue };
        padding: 5%;
    }

    @media (min-width: 1080px) {
        display: none;
    }
`
export const FullWidthContainer = styled.div`
    background-color: ${({ theme }) => theme.lightGrey };
    width: 100%;
`

export const StyledInformationContainer = styled.div`
    padding: 5%;
    text-align: left;
    width: 60%;
    margin: 0 auto;
    animation: ${ slideFromLeft } 5s ease-in;
`

export const Rotate = styled.div`
    position: absolute;
    z-index: -999;
    animation: ${rotate} 17s linear infinite;
    left: -20%;
    top: -50px;
`

export const StyledRecycleIcon = styled.div`
    position: relative;
    transform: translateY(-180%);
`

export const StyledItems = styled.div`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 2fr 5fr;
    width: 95vw;
    height: 60vh;
    margin: 0 auto;
    align-items: center;
    overflow: hidden;
    right: 0;

    @media (max-width: 1080px) {
        display: grid;
        grid-template-columns: 1fr;
        width: 90vw;
        height: 30vh;
    }
`

export const ShowMoreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.lightGrey };
    width: 90%;
    height: 50%;
    padding: 25px;
    animation: ${ slideFromLeft } 8s ease-in infinite;


    @media (max-width: 1080px) {
        display: grid;
        grid-template-columns: 1fr;
        width: 90vw;
    }
    
`
export const CardsWrapper = styled.div`
    overflow-x: hidden;
`