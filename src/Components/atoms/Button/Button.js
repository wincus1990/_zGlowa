import React from 'react';
import styled, { css } from 'styled-components'

const Button = styled(({ children, openModal, ...props }) => (
    <button onClick = { openModal }{...props}>
        { children }
    </button>
))`
    background-color: ${({ theme }) => theme.mainBlue };
    color: white;
    transition: all 0.2s ease-in;
    border: 0;
    width: 40%;
    height: 50px;
    align-items: center;
    text-align: center;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        a{
            color: ${({ theme }) => theme.white }
            }
        }

    ${({ category }) => 
        category && css`
            color: ${({ theme }) => theme.mainBlue }; 
            background-color: ${({ theme }) => theme.white };
            border: 1px solid ${({ theme }) => theme.mainBlue }; 
            margin: 2% 2% 2% 0;

            &:hover {
                color: white; 
                background-color: ${({ theme }) => theme.mainBlue };
            }
        `
    }

    ${({ userCard }) => 
        userCard && css`
            color: ${({ theme }) => theme.mainblue }; 
            border: 1px solid ${({ theme }) => theme.mainBlue }; 
            border-radius: 5px;
            margin: 2% 2% 2% 0;
            width: 30%;
            height: 80%;
            }
        `
    }
`
export default Button;
