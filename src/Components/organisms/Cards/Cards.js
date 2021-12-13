import React from 'react';
import Card from 'Components/molecules/Card/Card.js'
import { CardsWrapper } from './CardsStyles';
import { useSelector } from 'react-redux';

export default function Cards() {

    const items = useSelector(state => state.items)

    return (
        <>
            <CardsWrapper>
                {items.map(item => (
                    <Card
                        id = { item.id }
                        key = { item.id }
                        minWidth = '300px'
                        margin = '10px'
                        img = { item.img } 
                        name = { item.name } 
                        localization = { item.localization } 
                        price = { item.price } />
                ))}
            </CardsWrapper>
        </>
    )
}