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
                <Paragraph medium>Wybierz pomiesczenie z którego chcesz się pozbyć przedmiotu oraz wpisz jego nazwę</Paragraph>
                <InputHandler>
                    <Input mainBackground placeholder ='wpisz nazwę przedmiotu'/>    
                </InputHandler>
            </ContentContainer>
        </BackgroundImage>
    </MainBackgroundWrapper>
)

export default MainBackground;