import styled from "styled-components";


export const MainBackgroundWrapper = styled.div`
    max-width: 100vw;
    height: 70vh;
    margin: 0 auto;
    padding: 0;
`

export const BackgroundImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    background-image: url(${({ image }) => image });
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 70vh;
`

export const ContentContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
`

export const InputHandler = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`