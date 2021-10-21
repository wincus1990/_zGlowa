import styled, { css } from 'styled-components'

const Button = styled.button`
    background-color: ${({ theme }) => theme.mainBlue };
    color: ${({ big, theme }) => big ? theme.mainBlue : theme.white};
    transition: all 0.2s ease-in;
    height: 30px;

    &:hover {
        cursor: pointer;
    }
    
    ${({ big }) => 
        big && css `
            font-size: ${({ theme }) => theme.fontSize.xs };
            color: ${({ theme }) => theme.white };;
            width: 35%;
            height: 60px;
            border: 0;
            margin-bottom: 1.5%;

            &:hover {
                background-color: ${({ theme }) => theme.white };
                color: ${({ theme }) => theme.mainBlue };
                border-color: ${({ theme }) => theme.mainBlue };
                border: 1px solid;
            }

            @media (max-width: 1080px) {
                    width: 40%;
                }

            @media (max-width: 768px) {
                width: 70%;
                padding: 5% 7%;
            }
        `
    }
    
`

export default Button;

