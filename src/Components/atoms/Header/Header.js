import styled, { css } from 'styled-components';

const Header = styled.h1`
    font-size: ${({ theme, big }) => (big ? theme.fontSize.xxl : theme.fontSize.l )};
    font-weight: ${({ theme }) => theme.medium} ;
    text-align: center;

    @media (max-width: 1080px) {
        font-size: ${({ theme }) => theme.fontSize.s };
    }

    ${({ primary }) => 
        primary && css`
            color: ${({ theme }) => theme.mainBlue }; 
            padding-bottom: 2%;
            font-family: 'Mulish', sans-serif;
            font-weight: 800;
            text-align: left;
        `
    }

    ${({ secondary }) => 
            secondary && css`
                color: ${({ theme }) => theme.black }; 
                font-size: ${({ theme }) => theme.fontSize.s };
                font-weight: ${({ theme }) => theme.medium };
                padding: 3.5% 0 3.5% 0;
            `
        }

    ${({ tertiary }) => 
            tertiary && css`
                color: ${({ theme }) => theme.black }; 
                font-size: ${({ theme }) => theme.fontSize.xs };
                font-weight: ${({ theme }) => theme.bold };
                text-align: left;

                @media (max-width: 1080px) {
                    text-align: center;  
                }
            `
        }
`;

export default Header;