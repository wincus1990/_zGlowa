import React, { useState } from "react";
import Modal from 'Components/molecules/Modal/Modal.js';
import logo_z_glowa from 'Assets/photos/logo_z_glowa_263x40.jpg';
import UserIcon from 'Assets/icons/userIcon.svg';
import LoginForm from 'Components/organisms/LoginForm/LoginForm.js';
import { ModalWrapper, NavWrapper, Logo, Hamburger, Menu, MenuLink, } from './NavigationStyles';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  const [ isOpen, setIsOpen ] = useState(false);
  const [ isModalOpen, setToggleModal ] = useState(false);

  const closeModal = () => {
    setToggleModal(false)
  }

  const openModal = () => {
      setToggleModal(true)
  }

  return (
    <>
        <NavWrapper>
            <Logo as = { NavLink } to='/' icon = { logo_z_glowa }></Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={ isOpen }>
                <MenuLink as = { NavLink } to="/">STRONA GŁÓWNA</MenuLink>
                <MenuLink as = { NavLink } to="/ogloszenia/">OGŁOSZENIA</MenuLink>
                <MenuLink href="https://www.zglowa.com/" target = '_blank' >IDEA</MenuLink>
                <MenuLink href="">KONTAKT</MenuLink>
                <MenuLink onClick = { openModal }>LOGOWANIE<img src = { UserIcon }  alt = ''/></MenuLink>
            </Menu>
        </NavWrapper>
        <ModalWrapper>
          { isModalOpen && <Modal login closeModal = { closeModal }> <LoginForm /></Modal> }
        </ModalWrapper>
      </>
  );
};

export default Navigation;

