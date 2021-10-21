import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    min-height: 40vh;
    width: 75%;
    text-align: center;
`

export const NewestWrapper = styled.div`
    background-color: ${({ theme }) => theme.lightGrey }; 
    text-align: left;
    padding: 2%;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1%;
    row-gap: 1%;
    justify-items: stretch;
    align-items: stretch;
    margin-bottom: 2%;
    
    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
        row-gap: 0.5%;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
`