import React from "react";
import Paragraph from "Components/atoms/Paragraph/Paragraph.js";
import ButtonIcon from "Components/atoms/ButtonIcon/ButtonIcon.js";
import DziennyIcon from 'Assets/photos/dzienny-icon.png';
import BiuroIcon from 'Assets/photos/biuro-icon.png';
import DzieciIcon from 'Assets/photos/dzieci-icon.png';
import GarazIcon from 'Assets/photos/garage-icon.png';
import KitchenIcon from 'Assets/photos/kitchen-icon.png';
import LazienkaIcon from 'Assets/photos/lazienka-icon.png';
import SypialniaIcon from 'Assets/photos/sypialnia-icon.png';
import { MenuLink } from 'Components/atoms/MenuLink/MenuLink.js';
import { StyledRoomsWrapper } from './RoomsStyles.js';
import { NavLink } from 'react-router-dom';

const Rooms = () => (
        <StyledRoomsWrapper>
                <ButtonIcon icon = { KitchenIcon} width = '55px' height = '60px'><span><MenuLink rooms as = { NavLink } to ='/ogloszenia/Kuchnia'>KUCHNIA</MenuLink></span></ButtonIcon>
                <ButtonIcon icon = { LazienkaIcon } width = '55px' height = '60px'><span><MenuLink rooms as = { NavLink } to ='/ogloszenia/Łazienka'>ŁAZIENKA</MenuLink></span></ButtonIcon>
                <ButtonIcon icon = { GarazIcon } width = '55px' height = '60px'><span><MenuLink rooms as = { NavLink } to ='/ogloszenia/Garaż'>GARAŻ</MenuLink></span></ButtonIcon>
                <ButtonIcon icon = { SypialniaIcon } width = '55px' height = '60px'><span><MenuLink rooms as = { NavLink } to ='/ogloszenia/Sypialnia'>SYPIALNIA</MenuLink></span></ButtonIcon>
                <ButtonIcon icon = { DziennyIcon } width = '55px' height = '60px'><span><MenuLink rooms as = { NavLink } to ='/ogloszenia/Salon'>SALON</MenuLink></span></ButtonIcon>
                <ButtonIcon icon = { DzieciIcon } width = '55px' height = '60px'><span><MenuLink rooms as = { NavLink } to ='/ogloszenia/P.Dziecięcy'>P. DZIECIĘCY</MenuLink></span></ButtonIcon>
                <ButtonIcon icon = { BiuroIcon } width = '55px' height = '60px'><span><MenuLink rooms as = { NavLink } to ='/ogloszenia/Biuro'>BIURO</MenuLink></span></ButtonIcon>
        </StyledRoomsWrapper>

)

export default Rooms;