import React from "react";
import Header from 'Components/atoms/Header/Header.js';
import Input from 'Components/atoms/Input/Input.js';
import Paragraph from 'Components/atoms/Paragraph/Paragraph.js';
import { MainBackgroundWrapper, ContentContainer, BackgroundImage, InputHandler } from './MainBackgroundStyles.js'

const MainBackground = (props) => (
    <MainBackgroundWrapper>
        <BackgroundImage {...props}>
            <ContentContainer>
                
                <Header primary big>Witaj w serwisie zGłową</Header>
                <Paragraph medium>Wpisz nazwę przedmiotu którego szukasz</Paragraph>
                <InputHandler>
                    <Input mainBackground placeholder =''/>    
                </InputHandler>
            </ContentContainer>
        </BackgroundImage>
    </MainBackgroundWrapper>
)

export default MainBackground;