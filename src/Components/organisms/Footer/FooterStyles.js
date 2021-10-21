import styled from 'styled-components';
import Facebook from 'Assets/photos/facebook.png';

export const FooterWrapper = styled.footer`
    background-color: ${({ theme,}) => theme.mainBlue };
    background-image: url(${(Facebook)});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 100%;
    min-height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-content: center;
`