import styled from "styled-components";

export const NavWrapper = styled.div`
  background: ${({ theme }) => theme.white };
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1366px;

  @media (max-width: 1080px) {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 80vw;
  }
`;

export const MenuLink = styled.a`
  padding-right: 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.black };
  font-size: ${({ theme }) => theme.fontSize.xxxs };
  transition: all 0.1s ease-in;
  
  &:hover {
    color: ${({ theme }) => theme.mainBlue };
  }

  @media (max-width: 1080px) {
    padding: 20px 20px;
  }
`;

export const Logo = styled.a`
  display: block;
  background-image: url(${({ icon }) => icon });
  width: 395px;
  height: 60px;
  background-repeat: no-repeat;
  background-position: 20% 60%;
  background-size: 50% 50%; 

  @media (max-width: 1080px) {
    width: 197px;
    height: 30px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;  
  
  @media (max-width: 1080px) {
    align-items: center;  
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    transition: 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  flex-wrap: wrap;
  
  span {
    height: 3px;
    width: 30px;
    background: ${({ theme }) => theme.mainBlue };
    margin-bottom: 4px;
    border-radius: 5px;
  }
  
  @media (max-width: 1080px) {
    display: flex;
  }
`;