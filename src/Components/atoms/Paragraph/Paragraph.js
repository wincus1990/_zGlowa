import styled, { css } from 'styled-components';

const Paragraph = styled.p `
    font-size: ${({ theme }) => theme.fontSize.xxs };
    font-weight: ${({ theme }) => theme.light };
    text-align: left;
    line-height: 25px;
    
    @media (max-width: 1080px) {
        font-size: ${({ theme }) => theme.fontSize.xxxs };
    }

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontSize.xxxs };
    }

    ${({ medium }) => 
        medium && css`
            font-size: ${({ theme }) => theme.fontSize.s };
            color: ${({ theme }) => theme.white }; 
            padding: 3% 0;
            text-align: left;
        `
    }

    ${({ description }) => 
        description && css`
            font-size: ${({ theme }) => theme.fontSize.xxxs };
            text-align: left;
        `
    }
`

export default Paragraph;