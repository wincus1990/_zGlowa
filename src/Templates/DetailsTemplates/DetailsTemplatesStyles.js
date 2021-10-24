import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
`

export const StyledWrapper = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-items: stretch;
    grid-gap: 5%;
    padding: 1%;
`

export const ItemDetailSidebar = styled.div`
    /* background-color: red; */
   
`

export const ItemDetails = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const CategoriesWrapper = styled.div`
    margin-top: 10%;
    height: 50%;

`
export const Categories = styled.div`
    margin: 3% 0;
`
export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`

export const RightWrapper = styled.div`
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ItemGallery = styled.div`
    background: center center;
    background-image: url(${({ image }) => image });
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 600px;
`

export const Images = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    width: 100%;
`

export const ContactFormWrapper = styled.div`
    /* background-color: pink; */
`

export const ItemImage = styled.div`
    background-image: url(${({ image }) => image });
    background-size: cover;
    background-position: center center;
    width: 100%; 
    height: 220px;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;