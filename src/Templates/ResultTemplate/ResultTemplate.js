import React, { useState } from 'react';
import ResultCard from 'Components/molecules/ResultCard/ResultCard.js';
import NoResults from 'Components/molecules/NoResults/NoResults';
import Header from 'Components/atoms/Header/Header';
import Input from 'Components/atoms/Input/Input';
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon.js';
import RightArrow from 'Assets/icons/refresh-arrow.svg';
import Button from 'Components/atoms/Button/Button.js';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Wrapper, SearchbarContainer, ResultContainer, ItemsTable, ItemRow, PriceSection, LocalizationSection, CategoriesSection } from './ResultTemplate.styles';

function ResultTemplate({ match }) {

    const location = useLocation();
    const getCategory = /^.*\/(.*)$/;
    const pathname = location.pathname.match(getCategory);

    ///REDUX STORE
    const items = useSelector(state => state.items)
    /// OTHER CATEGORIES
    const Categories = new Set(items.map(item => item.category));

    //SEARCH PARAMETERS
    const [ localization, setLocalization ] = useState(''.toLowerCase())
    const [ minPrice, setMinPrice ] = useState('');
    const [ maxPrice, setMaxPrice ] = useState('');
    
    //RESULTS 
    const getResults = items.map(item => (
        ///CONDITIONS
        item.category === pathname[1] 
            && (minPrice === '' ? true : (item.price >= minPrice))
            && (maxPrice === '' ? true : (item.price <= maxPrice))
            && (item.sold !== true)
            && (localization === '' ? true : (item.localization === localization)) ? 
                <ResultCard 
                    id = { item.id }
                    key = { item.id }
                    name = { item.name }
                    user_name = { item.user_name }
                    img = { item.img }
                    price = { item.price }
                    localization = { item.localization }
                />
            : null
    ))

    const resetValues = function(e){
        e.preventDefault();
        setMinPrice('')
        setMaxPrice('')
        setLocalization('')
    }

    return(
        <Wrapper>
            <SearchbarContainer>
                <ItemsTable>
                    <ItemRow>
                    </ItemRow>
                    <PriceSection>
                        <Header tertiary>CENA</Header>
                        <form>
                            <div>
                                <label>Min</label>
                                <Input search type = 'text' name = 'PriceMin' value = { minPrice }
                                    onChange = {(e) => setMinPrice(e.target.value)} 
                                />
                            </div>
                            <div>
                                <label>Max</label>
                                <Input search type = 'text' name = 'PriceMax' value = { maxPrice }
                                    onChange = {(e) => setMaxPrice(e.target.value)} 
                                />
                            </div>
                            <span>
                                <ButtonIcon search icon = { RightArrow } onClick = { resetValues } />
                            </span>
                        </form>
                    </PriceSection>
                    <LocalizationSection>
                        <Header tertiary>LOKALIZACJA</Header>
                        <form>
                            <div>
                                <label>Miasto</label>
                                <Input search type = 'text' name = 'localization' value = { localization }
                                    onChange = {(e) => setLocalization(e.target.value)}
                                />
                            </div>
                            <span>
                                <ButtonIcon search icon = { RightArrow } onClick = { resetValues } />
                            </span>
                        </form>
                    </LocalizationSection>
                    <CategoriesSection>
                        <Header tertiary>PRZESZUKAJ POZOSTAŁE POMIESZCZENIA</Header>
                            <div>
                                { Array.from(Categories).map(item => ( <Link to = { `/ogloszenia/${item}` }><Button category>{ item }</Button></Link> ))}
                            </div>
                    </CategoriesSection>
                </ItemsTable>
            </SearchbarContainer>
            <ResultContainer>
                { pathname[1] === '' ? <NoResults /> : getResults }
            </ResultContainer>
        </Wrapper>
    )
}

export default ResultTemplate;

