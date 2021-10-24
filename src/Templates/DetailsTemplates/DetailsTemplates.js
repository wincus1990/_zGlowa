import React, { useState } from 'react';
import Header from 'Components/atoms/Header/Header';
import Paragraph from 'Components/atoms/Paragraph/Paragraph';
import Button from 'Components/atoms/Button/Button';
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon';
import UserIcon from 'Assets/icons/userIcon.svg';
import Stars from 'Assets/photos/stars.png';
import ContactForm from 'Components/organisms/ContactForm/ContactForm';
import { useLocation } from 'react-router-dom';
import { Initial } from 'Assets/Initial/Initial.js'
import { StyledWrapper, Wrapper, ItemDetailSidebar, ItemGallery, RightWrapper, Images, ContactFormWrapper, ItemDetails, CategoriesWrapper, Categories, UserInfo, ItemImage } from './DetailsTemplatesStyles';

function DetailTemplates({ match }) {
    
    const location = useLocation();
    const getNumber = /\d+/g;
    const pathname = location.pathname.match(getNumber);
    const Cat = new Set(Initial.map(item => item.category));
    const [ MainImage, setMainImage ] = useState(Initial[pathname].img);

    const scrollToContactForm = function() {
        window.scrollTo({
          top: 2000,
          behavior: "smooth"
        });
      };
    
    return (
        <Wrapper>
            <StyledWrapper>
                <ItemDetailSidebar>
                    <ItemDetails>
                        <Header tertiary>{ Initial[pathname].name.toUpperCase() }</Header>
                        <Paragraph description>{ Initial[pathname].description }</Paragraph>
                        <UserInfo>
                            <ButtonIcon icon = { UserIcon }/>
                            <Paragraph description>{ Initial[pathname].user_name }</Paragraph>
                            <ButtonIcon icon = { Stars }/>
                        </UserInfo>
                    <Header tertiary>{ Initial[pathname].price} zł</Header>
                    <Button onClick = { scrollToContactForm }>WYŚLIJ WIADOMOŚĆ DO SPRZEDAWCY</Button>
                    </ItemDetails>
                    <CategoriesWrapper>
                        <Header tertiary> KATEGORIA </Header>
                            <Categories>
                                <Button category>{ Initial[pathname].category.toUpperCase() }</Button>
                            </Categories>
                            <Header tertiary> POZOSTAŁE </Header>
                        <Categories>
                            {Array.from(Cat).map(item => ( item !== Initial[pathname].category ?  <Button category>{item}</Button> : null ))}
                        </Categories>
                    </CategoriesWrapper>
                </ItemDetailSidebar>
                <RightWrapper>
                    <ItemGallery image = { MainImage } alt = ''></ItemGallery>
                        <Images>
                            {Initial[pathname].images.map(item => 
                                <ItemImage onClick={() => { setMainImage(item)} } image = {item} key = { Initial[pathname].id }/> )}
                        </Images>
                    <ContactFormWrapper>
                        <ContactForm />
                    </ContactFormWrapper>
                </RightWrapper>
            </StyledWrapper>
        </Wrapper>
    )
  }

export default DetailTemplates;

// name = {Initial[pathname].name}
// img = {Initial[pathname].img}
// location = {Initial[pathname].localization}
// price = {Initial[pathname].price}
