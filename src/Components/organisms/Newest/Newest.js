import React from 'react';
import Header from 'Components/atoms/Header/Header';
import Card from 'Components/molecules/Card/Card.js';
import Button from 'Components/atoms/Button/Button.js';
import { Container, NewestWrapper } from './NewestStyles.js';
import { Initial } from 'Assets/Initial/Initial.js'

const Newest = () => (
    <Container>
        <Header secondary>NAJNOWSZE OGŁOSZENIA</Header>
        <NewestWrapper>
            {Initial.map(item => (
                <Card 
                    img = { item.img } 
                    name = { item.name } 
                    localization = { item.localization } 
                    price = { item.price } />
                ))}
        </NewestWrapper>
        <Button big>ZOBACZ WIĘCEJ</Button>
    </Container>
)

export default Newest;