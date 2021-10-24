import React from 'react';
import Input from 'Components/atoms/Input/Input.js';
import Header from 'Components/atoms/Header/Header.js';
import { StyledFormWrapper, StyledHeaderWrapper, StyledDataWrapper, StyledTextAreaWrapper } from './ContactFromStyles';
import Button from 'Components/atoms/Button/Button';

const ContactForm = () => (
    <StyledFormWrapper>
        <StyledHeaderWrapper>
            <Header tertiary>Wyślij wiadomość do sprzedającego</Header>
        </StyledHeaderWrapper>
        <StyledDataWrapper>
            <form>
                <div>
                    <label>Imię:</label>
                    <label>Nazwisko:</label>
                </div>
                <div>
                    <Input contact type = 'text' />
                    <Input contact type = 'text'/>
                </div>
                <div>
                    <label>Telefon:</label>
                    <label>Emial:</label>
                </div>
                <div>
                    <Input contact type = 'text' />
                    <Input contact type = 'text'/>
                </div>
                <div>
                  
                    <label>Treść:</label>
                </div>
                <div>
                    <textarea></textarea>
                </div>
                <Button>Wyślij wiadomość</Button>
            </form>
        </StyledDataWrapper>
    </StyledFormWrapper>
)

export default ContactForm;
