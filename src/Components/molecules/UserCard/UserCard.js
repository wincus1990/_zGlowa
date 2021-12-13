import React from 'react';
import PropTypes from 'prop-types';
import five_stars from 'Assets/photos/five_stars.png';
import { Wrapper, TopSection, BottomSection, TopSectionItemContainer, Avatar, ProfileInformation, ParagraphUser } from './UserCard.styles.js';

const UserCard = ({ user_name, fname, surname, localization, userAvatar }) => (
    <Wrapper>
        <TopSection>
            <TopSectionItemContainer>
                <Avatar src = { userAvatar } alt = ''></Avatar>
                <ProfileInformation> 
                    <h6>{ user_name }</h6>
                    <img src = { five_stars } alt = '' />
                </ProfileInformation>
            </TopSectionItemContainer>
        </TopSection>
        <BottomSection>
            <ParagraphUser description>{ fname }</ParagraphUser>
            <ParagraphUser description>{ surname }</ParagraphUser>
            <ParagraphUser description>{ localization }</ParagraphUser>
        </BottomSection>
    </Wrapper>
)

UserCard.propTypes = {
    user_name: PropTypes.string.isRequired,
    fname: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    localization: PropTypes.string.isRequired,
    userAvatar: PropTypes.string,
}

UserCard.defaultProps = {
    userAvatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    user_name: 'user_name',
    fname: 'Jan',
    surname: 'Kowalski',
    localization: 'Warszawa'
};

export default UserCard;