import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
`

export const StyledWrapper = styled.div`
    width: 90vw;
    height: 100vh;
    margin: 0 auto;
    /* background-color: lightgreen; */
    display: flex;
    justify-content: center;
`

export const ItemDetailSidebar = styled.div`
    /* background-color: red; */
    width: 40%;
   
`

export const ItemDetails = styled.div`
    background-color: white;
    height: 40%;
    padding: 8%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Categories = styled.div`
    height: 30%;
    padding: 8%;

`
export const UserInfo = styled.div`
    display: flex;
`

export const RightWrapper = styled.div`
    background-color: white;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ItemGallery = styled.div`
    background-color: green;
    background: center center;
    justify-content: center;
    background-image: url(${({ image }) => image });
    background-repeat: no-repeat;
    background-position: center center fixed;
    background-size: cover;
    width: 100%;
    height: 700px;
    padding: -80%;
`

export const SimilarWrapper = styled.div`
    /* background-color: blue; */
`

export const ContactFormWrapper = styled.div`
    /* background-color: pink; */
`