import React, { useState } from "react";
import PropTypes from 'prop-types';
import Paragraph from "Components/atoms/Paragraph/Paragraph";
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon.js';
import Button from "Components/atoms/Button/Button";
import UserIcon from 'Assets/icons/userIcon.svg';
import Stars from 'Assets/photos/stars.png';
import { useDispatch } from 'react-redux';
import { removeItem, toggleSold } from 'store/index.js';
import { Redirect } from 'react-router-dom';
import { CardWrapper, InformationWrapper, ItemName, ItemLocalization, ItemPrice } from './ResultCard.styles';

function ResultCard(props) {

    const dispatch = useDispatch();
    const [ redirectToResultTemplate, getRedirectToResultTemplate ] = useState(false)
    const [ redirectToUserProfileTemplate, getRedirectToUserProfileTemplate ] = useState(false)
    const { id, img, name, description, user_name, localization, price, logged } = props;

    const handleShowMoreClick = () => {
        getRedirectToResultTemplate(true)
    }
    const handleShowUserProfile = () => {
        getRedirectToUserProfileTemplate(true)
    }

    const handleRemoveItem = () => {
        dispatch(removeItem({ id: id }))
    }

    const setItemSold = (e) => {
        dispatch(toggleSold({id: id}))
    }

    if (redirectToResultTemplate) {
        return <Redirect to = { `/items/${id}` } />
    } else if (redirectToUserProfileTemplate) {
        return <Redirect to = { `/user_name/${user_name}` } />
    }

    return (
        <CardWrapper> 
            <img src = { img } alt = { name }></img>
            <InformationWrapper>
                <ItemName onClick = { handleShowMoreClick }> { name.toUpperCase() } </ItemName>
                <span>
                    <Paragraph description>{ description }</Paragraph>
                </span>
                <div onClick = { handleShowUserProfile }>
                    {logged ? <>
                        <Button userCard onClick = { handleRemoveItem }>USUŃ</Button>
                        <Button userCard onClick = { setItemSold } >ARCHIWUM</Button>
                    </> :
                    <>
                        <ButtonIcon icon = { UserIcon }/>
                        <Paragraph description>{ user_name }</Paragraph>
                        <ButtonIcon icon = { Stars }/>
                    </>
                    }
                </div>
                <ItemLocalization> { localization }</ItemLocalization>
                <ItemPrice> { price } PLN</ItemPrice>
            </InformationWrapper>
        </CardWrapper>
    )
}

ResultCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    user_name: PropTypes.string.isRequired,
    localization: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    minWidth: PropTypes.string,
    margin: PropTypes.string,
}

ResultCard.defaultProps = {
    img: 'https://pyxis.nymag.com/v1/imgs/22e/c1c/a84863094dbe41b7352f307df2afa34f0e-18-wfh.rsquare.w700.jpg',
    name: 'Nazwa przedmiotu',
    description: 'Lorem ipsum dolor sit ammet',
    user_name: 'Jan_Kowalski',
    localization: 'Miasto',
    price: 0,
};

export default ResultCard;


// function Card(props){

//     const [ redirect, getRedirect ] = useState(false)
//     const { id, img, name, localization, price, minWidth, margin } = props;

//     const handleShowMoreClick = function(){
//         getRedirect(true);
//     }

//     if (redirect) {
//         return <Redirect to = { `/items/${id}` } />
//     }

//     return(
//         <CardWrapper style = {{ minWidth: minWidth, margin: margin }}> 
//             <img src = { img } alt = { name }></img>
//             <ItemName> { name.toUpperCase() } </ItemName>
//             <ItemLocalization> { localization.toUpperCase() }</ItemLocalization>
//             <Bottom>
//                 <ItemPrice> { price } PLN</ItemPrice>
//                 <p onClick = { handleShowMoreClick }>ZOBACZ WIĘCEJ</p>
//                 <img src = { RightArrow } alt = ''></img>
//             </Bottom>
//     </CardWrapper>
//     )
// }