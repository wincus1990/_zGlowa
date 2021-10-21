import React from "react";
import PropTypes from 'prop-types';
import RightArrow from 'Assets/photos/right-arrow.png'
import { CardWrapper, ItemName, ItemLocalization, ItemPrice, Bottom } from './Card.styles';

const Card = ({img, name, localization, price, minWidth, margin }) => (
    <CardWrapper style = {{minWidth: minWidth, margin: margin}}>
        <img src = { img } alt = { img }></img>
        <ItemName> { name.toUpperCase()  } </ItemName>
        <ItemLocalization> { localization.toUpperCase() }</ItemLocalization>
        <Bottom>
            <ItemPrice> { price } PLN</ItemPrice>
            <p><a href = '/#'>ZOBACZ WIĘCEJ</a></p>
            <img src = { RightArrow } alt = { RightArrow }></img>
        </Bottom>
    </CardWrapper>
)

Card.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    localization: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    minWidth: PropTypes.string,
    margin: PropTypes.string,
}

Card.defaultProps = {
    img: 'https://pyxis.nymag.com/v1/imgs/22e/c1c/a84863094dbe41b7352f307df2afa34f0e-18-wfh.rsquare.w700.jpg',
    name: 'Nazwa przedmiotu',
    localization: 'Miasto',
    price: 0,
};

export default Card;