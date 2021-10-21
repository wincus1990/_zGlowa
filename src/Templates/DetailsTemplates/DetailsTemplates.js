import React from 'react';
import Header from 'Components/atoms/Header/Header';
import Paragraph from 'Components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon';
import { useLocation } from 'react-router-dom';
import { Initial } from 'Assets/Initial/Initial.js'
import { StyledWrapper, Wrapper, ItemDetailSidebar, ItemGallery, RightWrapper, SimilarWrapper, ContactFormWrapper, ItemDetails, Categories, UserInfo } from './DetailsTemplatesStyles';
import UserIcon from 'Assets/icons/userIcon.svg';

function DetailTemplates() {
    
    const location = useLocation();
    const numberPattern = /\d+/g;
    const pathname = location.pathname.match(numberPattern);
    
    return (
        <Wrapper>
            <StyledWrapper>
                <ItemDetailSidebar>
                    <ItemDetails>
                        <Header tertiary>{ Initial[pathname].name.toUpperCase() }</Header>
                        <Paragraph description>{ Initial[pathname].description }</Paragraph>
                        <UserInfo>
                            <ButtonIcon icon = { UserIcon }/>
                            <Paragraph description>{ Initial[pathname].user_name}</Paragraph>
                        </UserInfo>
                    <Header tertiary>{ Initial[pathname].price} zł</Header>
                    </ItemDetails>
                    <Categories>
                        <Header tertiary> KATEGORIE </Header>
                    </Categories>
                </ItemDetailSidebar>
                <RightWrapper>
                    <ItemGallery image = { Initial[pathname].img }></ItemGallery>
                    <SimilarWrapper>similar</SimilarWrapper>
                    <ContactFormWrapper>form</ContactFormWrapper>
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