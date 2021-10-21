import React from "react";
import ButtonIcon from "Components/atoms/ButtonIcon/ButtonIcon.js";
import DziennyIcon from 'Assets/photos/dzienny-icon.png';
import BiuroIcon from 'Assets/photos/biuro-icon.png';
import DzieciIcon from 'Assets/photos/dzieci-icon.png';
import GarazIcon from 'Assets/photos/garage-icon.png';
import KitchenIcon from 'Assets/photos/kitchen-icon.png';
import LazienkaIcon from 'Assets/photos/lazienka-icon.png';
import SypialniaIcon from 'Assets/photos/sypialnia-icon.png';
import { StyledRoomsWrapper } from './RoomsStyles.js';

const Rooms = () => (
        <StyledRoomsWrapper>
            <ButtonIcon icon = { KitchenIcon} width = '55px' height = '60px'><span>KUCHNIA</span></ButtonIcon>
            <ButtonIcon icon = { LazienkaIcon } width = '55px' height = '60px'><span>ŁAZIENKA</span></ButtonIcon>
            <ButtonIcon icon = { GarazIcon } width = '55px' height = '60px'><span>GARAŻ</span></ButtonIcon>
            <ButtonIcon icon = { SypialniaIcon } width = '55px' height = '60px'><span>SYPIALNIA</span></ButtonIcon>
            <ButtonIcon icon = { DziennyIcon } width = '55px' height = '60px'><span>SALON</span></ButtonIcon>
            <ButtonIcon icon = { DzieciIcon } width = '55px' height = '60px'><span>P. DZIECIĘCY</span></ButtonIcon>
            <ButtonIcon icon = { BiuroIcon } width = '55px' height = '60px'><span>BIURO</span></ButtonIcon>
        </StyledRoomsWrapper>

)

export default Rooms;