import styled, { css } from "styled-components";
import { slideInTop } from './Image.styles';

const Image = styled.img`
    width: ${({ width }) => width };
    height: ${({ height }) => height };

    ${({ slideTop }) => 
        slideTop && css`
            animation: ${ slideInTop } 5s ease-in;
            }
        `
    }
`

export default Image;
