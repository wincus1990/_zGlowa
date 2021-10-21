import React, { useState } from "react";
import ButtonIcon from "Components/atoms/ButtonIcon/ButtonIcon";
import logo_z_glowa from 'Assets/photos/logo_z_glowa_263x40.jpg';
import usericon from 'Assets/icons/userIcon.svg';
import { NavWrapper, Logo, Hamburger, Menu, MenuLink, } from './NavigationStyles';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <NavWrapper>
        <Logo href="" icon = { logo_z_glowa }></Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
        </Hamburger>
        <Menu isOpen={ isOpen }>
            <MenuLink href="">STRONA GŁÓWNA</MenuLink>
            <MenuLink href="">OGŁOSZENIA</MenuLink>
            <MenuLink href="">IDEA</MenuLink>
            <MenuLink href="">KONTAKT</MenuLink>
            <MenuLink href="">LOGOWANIE</MenuLink>
        </Menu>
    </NavWrapper>
  );
};

export default Navbar;

