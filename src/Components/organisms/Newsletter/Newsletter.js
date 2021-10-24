import React from 'react';
import Slogan from 'Assets/photos/slogan_z_glowa_578x60.jpg';
import Input from 'Components/atoms/Input/Input.js';
import Button from 'Components/atoms/Button/Button.js';
import Paragraph from 'Components/atoms/Paragraph/Paragraph.js';
import { NewsletterWrapper, InputWrapper } from './NewsletterStyles.js';

const Newsletter = () => (
    <NewsletterWrapper>
        <img src = {Slogan} alt = 'Slogan'/>
            <InputWrapper>
                <Input placeholder = 'Newsletter'/>
                <Button>ZAPISZ SIĘ</Button>
            </InputWrapper>
            <Paragraph>Zapisz się do grona naszych przyjaciół, <br/> a będziesz otrzymywać informacje o nowych, interesujących Cię przedmiotach</Paragraph>
        </NewsletterWrapper>
)

export default Newsletter;