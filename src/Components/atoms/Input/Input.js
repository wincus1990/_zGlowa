import styled, { css } from 'styled-components';
import magnifierIcon from 'Assets/icons/magnifier.svg';

const Input = styled.input`
    font-size: ${({ theme }) => theme.fontSize.xxs };
    font-weight: ${({ theme }) => theme.light };
    background-color: ${({ theme }) => theme.lightGrey };
    border: none;
    text-align: center;

        ::placeholder {
            color: ${({ theme }) => theme.grey300};
        }  

    ${({ mainBackground }) => 
        mainBackground && css `
            padding: 10px 20px 10px 40px;
            font-size: ${({ theme }) => theme.fontSize.xs};
            background-image: url(${magnifierIcon});
            background-size: 25px;
            background-position: 95% 50%;
            background-repeat: no-repeat;
            height: 100%;
            width: 70%;
            color: ${({ theme }) => theme.darkGrey };
        `
    }

    ${({ contact }) => 
            contact && css `
                color: ${({ theme }) => theme.white };
                font-size: ${({ theme }) => theme.fontSize.xxxs};
                width: 49%;
                padding: 5px;
                margin: 5px 0.5%;
                border-color: red;
            `
        }
    `; 

export default Input;
