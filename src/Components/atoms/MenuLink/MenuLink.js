import styled, { css } from "styled-components"

export const MenuLink = styled.a`
  padding-right: 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.black };
  font-size: ${({ theme }) => theme.fontSize.xxxs };
  transition: all 0.1s ease-in;
  

  ${({ rooms }) => 
        rooms && css `
            color: ${({ theme }) => theme.white }; 

            &:hover{
                color: ${({ theme }) => theme.white }; 
                font-size: ${({ theme }) => theme.fontSize.xxs };
            }
        `
    }
`