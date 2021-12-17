import styled, { css } from 'styled-components';

const Input = styled.input`
    font-size: ${({ theme }) => theme.fontSize.xxs };
    font-weight: ${({ theme }) => theme.light };
    color: ${({ theme }) => theme.black };
    background-color: ${({ theme }) => theme.lightGrey };
    border: none;
    text-align: left;

    ::placeholder {
        color: ${({ theme }) => theme.grey300};
    }  

    ${({ contact }) => 
        contact && css`
            font-size: ${({ theme }) => theme.fontSize.xxxs };
            width: 99%;
            height: 30px;
            padding: 15px 0;
            border-radius: 5px;
        `
    }

    ${({ search }) => 
        search && css`
            font-size: ${({ theme }) => theme.fontSize.xxxs };
            border: 1px solid ${({ theme }) => theme.mediumGrey };
            background-color: 1px solid ${({ theme }) => theme.white };
            width: 95%;
            height: 30px;
            padding: 15px 0;
        `
    }

    ${({ addItem }) => 
        addItem && css`
            font-size: ${({ theme }) => theme.fontSize.xxxs };
            border: 1px solid ${({ theme }) => theme.lightGrey };
            background-color: 1px solid ${({ theme }) => theme.white };
            width: 100%;
            height: 30px;
            padding: 15px 0;
            border-radius: 5px;
        `
    }
`; 

export default Input;
