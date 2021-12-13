import styled from "styled-components"

export const MenuLink = styled.a`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${({ theme}) => theme.black };
  font-size: ${({ theme }) => theme.fontSize.xxxs };
  transition: all 0.1s ease-in; 
`