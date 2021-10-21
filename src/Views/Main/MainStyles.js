import styled from "styled-components";

export const StyledWrapper = styled.div`
    padding: 0;
    margin: 0 auto;
    border: 0;
`

export const SectionWrapper = styled.section`
    background-color: ${({ theme, blue }) => blue ? theme.mainBlue : theme.white };
    background-image: url(${({ img }) => img });
    background-repeat: no-repeat;
    background-position: 20% 20%;
    width: 100%;
    min-height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-content: center;
    margin: 4% 0 4% 0;
`

export const ParagraphWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.xxxs };
`
