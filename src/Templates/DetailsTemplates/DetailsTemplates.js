import React, { useState } from 'react';
import Header from 'Components/atoms/Header/Header';
import Paragraph from 'Components/atoms/Paragraph/Paragraph';
import Button from 'Components/atoms/Button/Button';
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon';
import UserIcon from 'Assets/icons/userIcon.svg';
import Stars from 'Assets/photos/stars.png';
import ContactForm from 'Components/organisms/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { MenuLink } from 'Components/atoms/MenuLink/MenuLink.js';
import { useLocation } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { StyledWrapper, Wrapper, ItemDetailSidebar, ItemGallery, RightWrapper, Images, ContactFormWrapper, ItemDetails, CategoriesWrapper, Categories, UserInfo, ItemImage } from './DetailsTemplatesStyles';

function DetailsTemplates({ match }) {

    ///Redux store
    const items = useSelector(state => state.items)

    const location = useLocation();
    const getNumber = /\d+/g;
    const pathname = location.pathname.match(getNumber)[0];
    const Cat = new Set(items.map(item => item.category));
    const [ MainImage, setMainImage ] = useState(items[pathname].img);

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
                        <Header tertiary>{ items[pathname].name.toUpperCase() }</Header>
                        <Paragraph description>{ items[pathname].description }</Paragraph>
                        <UserInfo>
                            <ButtonIcon icon = { UserIcon }/>
                            <Paragraph description><MenuLink as = { NavLink } to = {`/user_name/${items[pathname].user_name }`}>{ items[pathname].user_name }</MenuLink></Paragraph>
                            <ButtonIcon icon = { Stars }/>
                        </UserInfo>
                        <Header tertiary>{ items[pathname].price} zł</Header>
                        <Button onClick = { scrollToContactForm }>WYŚLIJ WIADOMOŚĆ DO SPRZEDAWCY</Button>
                    </ItemDetails>
                    <CategoriesWrapper>
                        <Header tertiary> KATEGORIA </Header>
                            <Categories>
                                <Button category><MenuLink as = { NavLink } to = {`/ogloszenia/${items[pathname].category}`}>{ items[pathname].category.toUpperCase() }</MenuLink></Button>
                            </Categories>
                            <Header tertiary> POZOSTAŁE </Header>
                        <Categories>
                            { Array.from(Cat).map(item => ( item !== items[pathname].category ?  <Link to = {`/ogloszenia/${item}`}><Button category>{ item }</Button></Link> : null ))}
                        </Categories>
                    </CategoriesWrapper>
                </ItemDetailSidebar>
                <RightWrapper>
                    <ItemGallery image = { MainImage } alt = ''></ItemGallery>
                        <Images>
                            {items[pathname].images.map(item => 
                                <ItemImage onClick={() => { setMainImage(item)} } image = { item } key = { items[pathname].id }/> )}
                        </Images>
                    <ContactFormWrapper>
                        <ContactForm />
                    </ContactFormWrapper>
                </RightWrapper>
            </StyledWrapper>
        </Wrapper>
    )
  }

export default DetailsTemplates;
