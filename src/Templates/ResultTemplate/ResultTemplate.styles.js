import styled from "styled-components";
import { fadeIn } from 'Components/molecules/Modal/Modal.styles.js';

export const Wrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2%;
    animation: ${ fadeIn } 0.5s ease-in;
    
    @media (max-width: 1080px) {
        display: block;
        width: 90vw;
    }
`

export const SearchbarContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 1080px) {
        display: block;
        width: 90vw;
        padding: 10%;
    }
`

export const ResultContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${ fadeIn } 0.5s ease-in;


    @media (max-width: 1080px) {
        display: grid;
        width: 90vw;
    }
`

export const ItemsTable = styled.div`

`;

export const ItemRow = styled.div`

`

export const PriceSection = styled.div`
    padding: 3% 0;
    color: ${({ theme }) => theme.darkGrey };

    form {
        display: flex;
        align-items: flex-end;
        padding: 5% 0;

        div {
            display: inline-block;
            width: 100%;
        }

        label{
            display: block;
            padding: 5px 0;
            font-size: ${({ theme }) => theme.fontSize.xxxs}
        }
    }
    
`;

export const LocalizationSection = styled(PriceSection)`

`;

export const CategorySection = styled.div`

`;

export const NameSection = styled.div`

`;

export const CategoriesSection = styled.div`
    
    div{
        display: grid;
        padding: 8% 0;
        grid-template-columns: 1fr 1fr;
        justify-items: stretch;
        grid-gap: 2%;

        Button {
            width: 100%;
        }
    }
`