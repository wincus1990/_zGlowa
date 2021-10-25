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
                    <label>Name</label>
                    <Input contact type = 'text' name = 'Imie'/>
                </div>
                <div>
                    <label>Nazwisko</label>
                    <Input contact type = 'text' name = 'Nazwisko'/>
                </div>
                <div>
                    <label>Telefon</label>
                    <Input contact type = 'text' name = 'Telefon'/>
                </div>
                <div>
                    <label>Emial</label>
                    <Input contact type = 'text' name = 'Email'/>
                </div>
                    <label>Treść</label>
                    <textarea/>
                <Button secondary>WYślij wiadomość</Button>
            </form>
        </StyledDataWrapper>
    </StyledFormWrapper>
)

export default ContactForm;
