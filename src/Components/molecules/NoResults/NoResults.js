import React from "react"; 
import chooseResults from 'Assets/photos/chooseResults.png';
import { Wrapper, NoResultsHeader } from './NoResults.styles';

const NoResults = () => (
    <Wrapper>
        <NoResultsHeader secondary>Uzupełnij kryteria wyszukiwania</NoResultsHeader>
        <img src = {chooseResults} alt = '' />
    </Wrapper>
    
)

export default NoResults;