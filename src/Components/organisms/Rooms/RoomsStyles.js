import styled from "styled-components";

export const StyledRoomsWrapper = styled.div`
  background-color: ${({ theme }) => theme.mainBlue }; 
  color: white;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  position: relative;
  z-index: 1;

  span {
    color: white;
      display: inline-block;
      transform: translateX(40px);
      white-space: nowrap;

      @media (max-width: 1080px) {
        display: none;
    }
  }
`
