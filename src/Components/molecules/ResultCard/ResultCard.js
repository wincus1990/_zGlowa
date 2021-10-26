import React from "react";
import PropTypes from 'prop-types';
import Paragraph from "Components/atoms/Paragraph/Paragraph";
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon.js';
import UserIcon from 'Assets/icons/userIcon.svg';
import Stars from 'Assets/photos/stars.png';
import { Redirect } from 'react-router-dom';
import { CardWrapper, InformationWrapper, ItemName, ItemLocalization, ItemPrice } from './ResultCard.styles';

class ResultCard extends React.Component {

    state = {
        redirect: false,
    }

    handleShowMoreClick = () => this.setState({ redirect: true })

    render() {

        const { id, img, name, description, user_name, localization, price, minWidth, margin } = this.props;

        if (this.state.redirect) {
            return <Redirect to = { `/items/${id}` } />
        }

        return (
            <CardWrapper style = {{ minWidth: minWidth, margin: margin }}> 
                <img src = { img } alt = { name }></img>
                <InformationWrapper>
                    <ItemName onClick = { this.handleShowMoreClick }> { name } </ItemName>
                    <li>
                        <span>
                            <Paragraph description>{ description }</Paragraph>
                        </span>
                    </li>
                    <div>
                        <ButtonIcon icon = { UserIcon }/>
                        <Paragraph description>{ user_name }</Paragraph>
                        <ButtonIcon icon = { Stars }/>
                    </div>
                    <ItemLocalization> { localization }</ItemLocalization>
                    <ItemPrice> { price } PLN</ItemPrice>
                </InformationWrapper>
            </CardWrapper>
        )
    }
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