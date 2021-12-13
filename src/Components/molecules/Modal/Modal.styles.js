import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    bottom: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4%;
    background-color: white;
    -webkit-box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    -moz-box-shadow: 3px 3px 3px -2px rgba(196, 196, 196, 1);
    -webkit-box-shadow: inset 0px 0px 400px #000000;
    box-shadow: 0 0 0 100000px rgba(0,0,0,.4);
    animation: ${ fadeIn } 0.2s ease-in;
    p {
        position: absolute;
        top: 20px;
        right: 20px;

        &:hover {
            cursor: pointer;
        }
    }
`