import React from 'react';
import GlobalStyle from 'Theme/GlobalStyle';
import Paragraph from 'Components/atoms/Paragraph/Paragraph';
import Navigation from 'Components/organisms/Navigation/Navigation';
import Rooms from 'Components/organisms/Rooms/Rooms.js';
import MainBackground from 'Components/organisms/MainBackground/MainBackground.js';
import MainBackgroundImage from 'Assets/photos/mainBackground.png';
import PremiumCards from 'Components/organisms/PremiumCards/PremiumCards';
import Newest from 'Components/organisms/Newest/Newest';
import Quotes from 'Assets/photos/quotes.png';
import Newsletter from 'Components/organisms/Newsletter/Newsletter.js';
import Footer from 'Components/organisms/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/MainTheme';
import { StyledWrapper, SectionWrapper, ParagraphWrapper, InputWrapper } from './MainStyles';

const Main = () => (
    <div>
        <ThemeProvider theme = { theme } >
            <StyledWrapper>
                <GlobalStyle />
                <Navigation />
                <Rooms />
                <MainBackground image = { MainBackgroundImage } />
                <PremiumCards />
                <Newest />
                <SectionWrapper blue img = {Quotes}>
                    <ParagraphWrapper>
                        <Paragraph>
                            Każdy z nas ma niepotrzebne rzeczy w szafie, garażu, piwnicy i nie wie, co można z nimi zrobić. Wiedza, gdzie wyrzucić i czy w ogóle można, też bywa tajemna. Serdecznie zapraszamy do zapozniania się z projektemz _zGłową, który może Ci pomóc pozbyć się niepotrzebnych rzeczy.
                        </Paragraph>
                    </ParagraphWrapper>
                </SectionWrapper>
                <Newsletter />
                <Footer />
            </StyledWrapper>
        </ThemeProvider>
    </div>
)

export default Main;