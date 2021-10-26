import React, { useState, useEffect } from 'react';
import ResultCard from 'Components/molecules/ResultCard/ResultCard.js';
import { useLocation } from 'react-router-dom';
import { Initial } from 'Assets/Initial/Initial.js'
import { Wrapper } from './ResultTemplate.styles';

function ResultTemplate({ match }) {

    const location = useLocation();
    const getCategory = /^.*\/(.*)$/;
    const pathname = location.pathname.match(getCategory);
    const [category, setCategory ] = useState('');

    useEffect(() => { setCategory(pathname[1]) }, [pathname]);

    return(
        <Wrapper>
            {Initial.map((item) => (
                item.category === category ?
                    <ResultCard 
                        id = { item.id }
                        key = {item.id }
                        img = { item.img } 
                        name = { item.name }
                        description = {item.description.length > 100 ?
                            `${item.description.substring(0, 100)}...` : item.description
                        }
                        user_name = { item.user_name }
                        localization = { item.localization } 
                        price = { item.price } />
                        : null
                ))}
        </Wrapper>
    )
}

export default ResultTemplate;