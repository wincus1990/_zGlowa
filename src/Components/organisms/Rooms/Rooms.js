import React from "react";
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
import {  Link } from 'react-router-dom';

const Rooms = () => (
        <StyledRoomsWrapper>
                <MenuLink as = { Link } to ='/ogloszenia/Kuchnia'><ButtonIcon icon = { KitchenIcon} width = '55px' height = '60px'><span>KUCHNIA</span></ButtonIcon></MenuLink>
                <MenuLink as = { Link } to ='/ogloszenia/Łazienka'><ButtonIcon icon = { LazienkaIcon } width = '55px' height = '60px'><span>ŁAZIENKA</span></ButtonIcon></MenuLink>
                <MenuLink as = { Link } to ='/ogloszenia/Garaż'><ButtonIcon icon = { GarazIcon } width = '55px' height = '60px'><span>GARAŻ</span></ButtonIcon></MenuLink>
                <MenuLink as = { Link } to ='/ogloszenia/Sypialnia'><ButtonIcon icon = { SypialniaIcon } width = '55px' height = '60px'><span>SYPIALNIA</span></ButtonIcon></MenuLink>
                <MenuLink as = { Link } to ='/ogloszenia/Salon'><ButtonIcon icon = { DziennyIcon } width = '55px' height = '60px'><span>SALON</span></ButtonIcon></MenuLink>
                <MenuLink as = { Link } to ='/ogloszenia/P.Dziecięcy'><ButtonIcon icon = { DzieciIcon } width = '55px' height = '60px'><span>P.DZIECIĘCY</span></ButtonIcon></MenuLink>
                <MenuLink as = { Link } to ='/ogloszenia/Biuro'><ButtonIcon icon = { BiuroIcon } width = '55px' height = '60px'><span>Biuro</span></ButtonIcon></MenuLink>
        </StyledRoomsWrapper>
)

export default Rooms;