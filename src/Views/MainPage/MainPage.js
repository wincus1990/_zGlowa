import React from 'react';
import MainPhoto from 'Assets/icons/mainImage.svg';
import Image from 'Components/atoms/Image/Image.js'
import Circle from 'Assets/photos/circle 01.png';
import Header from 'Components/atoms/Header/Header.js'
import Button from 'Components/atoms/Button/Button.js'
import Paragraph from 'Components/atoms/Paragraph/Paragraph';
import Cards from 'Components/organisms/Cards/Cards';
import { Link } from 'react-router-dom';
import { StyledWrapper, ResponsiveBar, StyledSectionContainer, CardsWrapper, ParagraphHeader, Rotate, StyledTextContainer, rotate, StyledInformationContainer, FullWidthContainer, StyledRecycleIcon, StyledItems, ShowMoreWrapper } from './MainPageStyles';

const MainPage = () => (
    <StyledWrapper>
        <ResponsiveBar>
            <h3>Witaj w serwisie _zGłową</h3>
            <Link to = "/ogloszenia/">
                    <Button>SPRAWDŹ OGŁOSZENIA</Button>
                </Link>
        </ResponsiveBar>
        <StyledSectionContainer>
            <StyledTextContainer>
                <StyledRecycleIcon>
                    <Rotate>
                        <Image animation = { rotate } width ='80%' src = { Circle } alt = '' />
                    </Rotate>
                </StyledRecycleIcon>
                <Header primary>Witaj w serwisie _zGłową</Header>
                <ParagraphHeader secondary>Z nami możesz dać drugie życie niechcianym przedmiotom</ParagraphHeader>
                <Link to = "/ogloszenia/">
                    <Button>SPRAWDŹ OGŁOSZENIA</Button>
                </Link>
            </StyledTextContainer>
            <Image slideTop width = '100%' src = { MainPhoto } alt ='MainPhoto' />
        </StyledSectionContainer>
        <FullWidthContainer>
            <StyledInformationContainer>
                <Header primary>Ale o co w tym chodzi?</Header>
                <Paragraph>Każdy z nas ma niepotrzebne rzeczy w szafie, garażu, piwnicy i nie wie, co można z nimi zrobić. Wiedza, gdzie to wyrzucić i czy w ogóle można, bywa tajemna. My sami nie chcemy tracić głowy w naszych domach i mamy w związku z tym nadzieję, że dzięki naszemu projektowi pomożemy Ci w wygodny sposób pozbyć się rzeczy, których już nie potrzebujesz. Chcesz wiedzieć więcej o naszym projekcie? Zapraszamy do zapoznania się ze szczegółami. </Paragraph>
                <a href = "https://www.zglowa.com/">
                    <Button category>WIĘCEJ O PROJEKCIE</Button>
                </a>
            </StyledInformationContainer>
        </FullWidthContainer>
        <StyledItems>
            <ShowMoreWrapper>
                <Header primary>Co nowego?</Header>
                <Link to = "/ogloszenia/">
                    <Button>SPRAWDŹ OGŁOSZENIA</Button>
                </Link>
            </ShowMoreWrapper>  
            <CardsWrapper>
                <Cards />
            </CardsWrapper>
        </StyledItems>
    </StyledWrapper>
)

export default MainPage;