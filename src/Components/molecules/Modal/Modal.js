import React from 'react';
import { Wrapper } from './Modal.styles';

function Modal({ children, closeModal }) {

    return(
    <Wrapper>
        <p onClick = { closeModal }>X</p>
        { children }
    </Wrapper>
    )
}

export default Modal;
