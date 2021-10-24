import React from 'react';
import Card from 'Components/molecules/Card/Card.js'
import Header from 'Components/atoms/Header/Header';
import { PremiumCardsWrapper } from './PremiumCardsStyles';
import { Initial } from 'Assets/Initial/Initial.js'

export default function PremiumCards() {

    return (
        <>
        <Header secondary>OGŁOSZENIA WYRÓŻNIONE</Header>
            <PremiumCardsWrapper>
                {Initial.map(item => (
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
            </PremiumCardsWrapper>
        </>
    )
}