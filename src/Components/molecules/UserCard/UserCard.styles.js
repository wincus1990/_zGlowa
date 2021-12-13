import styled from "styled-components";
import Paragraph from 'Components/atoms/Paragraph/Paragraph.js';

export const Wrapper = styled.div`
    padding-bottom: 5%;
    z-index: -999;
`

export const TopSection = styled.div`
    height: 100%;
`

export const BottomSection = styled.div`
    padding: 2% 0;
`

export const TopSectionItemContainer = styled.div`
    background-color: ${({ theme }) => theme.lightGrey };
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: stretch;
    padding: 10%;
`

export const Avatar = styled.img`
        background-repeat: no-repeat;
        background-size: cover; 
        background-position: center center;
        margin: 0 auto;
        width: 90%;
        height: 100%;
        background-color: transparent;
        outline: none;   
        object-fit: cover;
        
`

export const ProfileInformation = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;
    justify-content: center;

    img{
        background-color: ${({ theme }) => theme.lightGrey };
        background-repeat: no-repeat;
        background-size: cover; 
        width: 60%;
        background-color: transparent;
    }
`

export const ParagraphUser = styled(Paragraph)`
    border-bottom: 1px solid ${({ theme }) => theme.mediumGrey };
    padding: 1.5% 0;
`

