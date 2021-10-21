import styled, { css } from 'styled-components';
import magnifierIcon from 'Assets/icons/magnifier.svg';

const Input = styled.input`
    padding: 10px 45px;
    font-size: ${({ theme }) => theme.fontSize.xxs };
    font-weight: ${({ theme }) => theme.light };
    background-color: ${({ theme }) => theme.lightGrey };
    border: none;
    height: 45px;
    width: 700px;

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
            border-radius: 0px;
            background-repeat: no-repeat;
            height: 100%;
            width: 70%;
            color: ${({ theme }) => theme.darkGrey };
        `
    }
`; 

export default Input;
