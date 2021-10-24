import styled, { css } from 'styled-components';

const Header = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l )};
  font-weight: ${({ theme }) => theme.medium} ;
  text-align: center;

    @media (max-width: 1080px) {
        font-size: ${({ theme }) => theme.fontSize.m };
    }

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontSize.m };
    }

  ${({ primary }) => 
        primary && css `
            color: ${({ theme }) => theme.white }; 
            padding-bottom: 2%;
        `
    }

    ${({ secondary }) => 
            secondary && css `
                color: ${({ theme }) => theme.black }; 
                font-size: ${({ theme }) => theme.fontSize.s };
                font-weight: ${({ theme }) => theme.medium };
                padding: 3.5% 0 3.5% 0;
            `
        }

    ${({ tertiary }) => 
            tertiary && css `
                color: ${({ theme }) => theme.black }; 
                font-size: ${({ theme }) => theme.fontSize.xs };
                font-weight: ${({ theme }) => theme.bold };
                text-align: left;
            `
        }
`;

export default Header;