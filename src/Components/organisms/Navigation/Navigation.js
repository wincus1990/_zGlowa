import React, { useState } from "react";
import logo_z_glowa from 'Assets/photos/logo_z_glowa_263x40.jpg';
import { NavWrapper, Logo, Hamburger, Menu, MenuLink, } from './NavigationStyles';
import { NavLink } from 'react-router-dom';


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
            <MenuLink as = { NavLink } to="/">STRONA GŁÓWNA</MenuLink>
            <MenuLink href="">OGŁOSZENIA</MenuLink>
            <MenuLink href="">IDEA</MenuLink>
            <MenuLink href="">KONTAKT</MenuLink>
            <MenuLink href="">LOGOWANIE</MenuLink>
        </Menu>
    </NavWrapper>
  );
};

export default Navbar;

