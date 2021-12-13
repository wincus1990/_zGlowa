import styled from "styled-components";
import Header from 'Components/atoms/Header/Header.js';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 80%;
    min-height: 60vh;
    justify-content: center;
    z-index: -900;

    img {
        opacity: 0.6;
    }
`

export const NoResultsHeader = styled(Header)`
    color: ${({ theme }) => theme.darkGrey };
`
