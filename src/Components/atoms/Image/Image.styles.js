import { keyframes } from 'styled-components'

///ANIMATION
export const slideInTop = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    20% {
        opacity: 1;
        transform: translateY(0px);
    }
    85% {
        opacity: 1;
        transform: translateY(0px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;