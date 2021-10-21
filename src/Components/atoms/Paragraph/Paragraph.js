import styled, { css } from 'styled-components';

const Paragraph = styled.p `
    font-size: ${({ theme }) => theme.fontSize.xxs };
    font-weight: ${({ theme }) => theme.light };
    line-height: 25px;

    @media (max-width: 1080px) {
        font-size: ${({ theme }) => theme.fontSize.xs };
    }

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontSize.xxs };
    }

    ${({ big }) => 
        big && css `
            font-size: ${({ theme }) => theme.fontSize.m };
            font-weight: ${({ theme }) => theme.medium };
            color: ${({ theme }) => theme.white }; 
            padding-bottom: 5%;
        `
    }

    ${({ medium }) => 
        medium && css `
            font-size: ${({ theme }) => theme.fontSize.s };
            color: ${({ theme }) => theme.white }; 
            padding-bottom: 3%;
        `
    }
`

export default Paragraph;