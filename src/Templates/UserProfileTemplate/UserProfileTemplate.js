import React, { useState } from 'react';
import ResultCard from 'Components/molecules/ResultCard/ResultCard';
import UserCard from 'Components/molecules/UserCard/UserCard';
import Button from 'Components/atoms/Button/Button.js';
import Modal from 'Components/molecules/Modal/Modal.js';
import ContactForm from 'Components/organisms/ContactForm/ContactForm';
import Input from 'Components/atoms/Input/Input.js';
import Paragraph from 'Components/atoms/Paragraph/Paragraph.js';
import Header from 'Components/atoms/Header/Header.js';
import Plus from 'Assets/icons/plus.svg';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from 'store/index.js';
import { useLocation } from 'react-router-dom';
import { Wrapper, UserInformation, ResultsContainer, Heading, StatusOption, StatusSection, StyledFormHeader } from './UserProfileTemplate.styles';

function UserProfileTemplate(props) {

    const location = useLocation();
    const getCategory = /^.*\/(.*)$/;
    const userPathname = location.pathname.match(getCategory)[1];
    const currentColor = 'hsl(233.8, 20.2%, 37.8%)';
    const isUserLogged = !(props.match.url === location.pathname);
    const [ itemForm, toggleItemForm ] = useState(false);
    const [ status, setStatus ] = useState(false)
    const [ isModalOpen, setToggleModal ] = useState(false);
    const [ itemName, setItemName ] = useState('');
    const [ category, setCategory ] = useState('Kuchnia');
    const [ description, setDescription ] = useState('');
    const [ image, setImage ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ img2, setImg2] = useState([]);

    ///REDUX STORE
    const items = useSelector(state => state.items)
    const dispatch = useDispatch();

    const showCurrent = () => {
        setStatus(false)
    }
    const showSold = () => {
        setStatus(true)
    }

    const closeModal = () => {
        setToggleModal(false)
    }

    const openModal = () => {
        setToggleModal(true)
    }

    const openAddItemForm = () => {
        toggleItemForm(!itemForm)
    }

    const ButtonFunction = () => {
        if (isUserLogged && itemForm) {
            return handleAddItem();
        } else {
            return openAddItemForm();
        }
    }

    console.log(img2)

    const UsrInf = items.find(element => element.user_name === userPathname)

    const handleAddItem = () => {
        dispatch(addItem({ 
            id: `${ items.length }`,
            user_name: `${ UsrInf.user_name }`,
            f_name: `${ UsrInf.f_name }`,
            surname: `${ UsrInf.surname }`,
            localization: `${ UsrInf.localization }`,
            name: `${ itemName }`,
            category: `${ category }`,
            description: `${ description}`,
            img: `${ image }`,
            images: [`${[image, ...img2]}`],
            price: `${ price }`,
            sold: false,
        }))
        toggleItemForm(!itemForm);
    }

    const switchButtons = () => {
        if(!isUserLogged) {
            return <Button openModal = { openModal }>NAPISZ WIADOMOŚĆ</Button>
        } else if (isUserLogged && !itemForm) {
            return <Button onClick = { ButtonFunction }>DODAJ NOWY PRZEDMIOT</Button>
        } else if (isUserLogged && itemForm){
            return null
        }   return null
    }

    return (
        <Wrapper>
            { isModalOpen && <Modal message closeModal = { closeModal }><ContactForm /></Modal> }
                <ResultsContainer>
                    <Heading tertiary>PRZEDMIOTY SPRZEDAJĄCEGO</Heading>
                    <StatusSection>
                        <StatusOption description onClick = { showCurrent }><span style = {{ color: status !== true ? currentColor : 'grey' }}>AKTUALNE</span></StatusOption>
                        <StatusOption description>/</StatusOption>
                        <StatusOption description onClick = { showSold }><span style = {{ color: status === true ? currentColor : 'grey' }}>ARCHIWALNE</span></StatusOption>
                    </StatusSection>
                    { items.map((item) => (
                        item.user_name === userPathname && item.sold === status ?
                            <ResultCard 
                                dispatch = {dispatch}
                                logged = { isUserLogged }
                                id = { item.id }
                                key = {item.id }
                                img = { item.img } 
                                name = { item.name }
                                description = { item.description.length > 100 ?
                                    `${ item.description.substring(0, 100)}...` : item.description
                                }
                                user_name = { item.user_name }
                                localization = { item.localization } 
                                price = { item.price } />
                                : null
                            ))}
                </ResultsContainer>
                <UserInformation>
                    <UserCard
                        user_name = { UsrInf.user_name }
                        fname = { UsrInf.f_name }
                        surname = { UsrInf.surname }
                        localization = { UsrInf.localization } />
                    { itemForm ? (
                        <>
                        <StyledFormHeader>
                            <Header tertiary>Dodaj nowy przedmiot</Header>
                            <h5 onClick = { ()=>toggleItemForm(!itemForm) }>X</h5>
                        </StyledFormHeader>
                            <form onSubmit = { handleAddItem }>
                                <label><Paragraph description>Nazwa przedmiotu</Paragraph></label>
                                <Input addItem type = 'text' name = 'itemName' onChange = { (e) => setItemName(e.target.value) } required/>
                                <label><Paragraph description>Zdjęcie główne</Paragraph></label>
                                <Input addItem type = 'text' name = 'image' onChange = { (e) => setImage(e.target.value) } /> 
                                <label><Paragraph description>Wybierz kategorię</Paragraph></label>
                                <select value = { category } onChange = { (e)=> setCategory(e.target.value) } >
                                    <option>Kuchnia</option>
                                    <option>Łazienka</option>
                                    <option>Garaż</option>
                                    <option>Salon</option>
                                    <option>Sypialnia</option>
                                    <option>Salon</option>
                                    <option>P.Dziecięcy</option>
                                    <option>Biuro</option>
                                </select>
                                <label><Paragraph description>Opis</Paragraph></label>
                                <textarea type = 'text' name = 'description' onChange = {(e) => setDescription(e.target.value) }/>
                                <label><Paragraph description>Cena</Paragraph></label>
                                <Input addItem type = 'text' name = 'image' onChange = {(e) => setPrice(e.target.value)} />
                                <Button type = 'submit'>DODAJ NOWY PRZEDMIOT</Button>
                            </form>
                        </>
                    ) : null }
                    { switchButtons() }
                </UserInformation>
        </Wrapper>
    )
}
export default UserProfileTemplate;

// (<Button onClick = { ButtonFunction }>DODAJ NOWY PRZEDMIOT</Button>) 
// : 
// (<Button openModal = { openModal }>NAPISZ WIADOMOŚĆ</Button>)