import styled from 'styled-components'

export const NewsletterWrapper = styled.div`
    background-color: ${({ theme, blue }) => blue ? theme.mainBlue : theme.white };
    background-image: url(${({ img }) => img });
    background-repeat: no-repeat;
    background-position: 20% 20%;
    max-width: 100vw;
    min-height: 25vh;
    text-align: center;
    margin: 4% 0 4% 0;
    overflow: hidden;

    img {
        margin: 0 auto;

        @media (max-width: 768px) {
                width: 80%;
            }
    }
`
export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    justify-content: center;
    height: 40px;

    button {
        height: 100%;
        width: 15vw;
    }

    input {
        height: 100%;
        width: 35vw;
    }
`