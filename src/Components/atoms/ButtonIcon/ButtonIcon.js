import styled, { css } from "styled-components";

const ButtonIcon = styled.button`
    display: block;
    width: ${({ width }) => width ? width : '30px' };
    height: ${({ height }) => height ? height : '30px' };
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 50% 50%; 
    border: none;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
    
    @media (max-width: 1080px) {
        padding: 1%;
    }

    ${({ search }) => 
        search && css `
            display: inline-block;
            font-size: ${({ theme }) => theme.fontSize.xxxs };
            background-color: ${({ theme }) => theme.mainBlue };
            padding: 5px;
            
        `
    }

`
export default ButtonIcon;
