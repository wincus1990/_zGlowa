import React, { useState } from 'react';
import ResultCard from 'Components/molecules/ResultCard/ResultCard';
import UserCard from 'Components/molecules/UserCard/UserCard';
import Button from 'Components/atoms/Button/Button.js';
import Modal from 'Components/molecules/Modal/Modal.js';
import ContactForm from 'Components/organisms/ContactForm/ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from 'store/index.js';
import { useLocation } from 'react-router-dom';
import { Wrapper, UserInformation, ResultsContainer, Heading, StatusOption, StatusSection } from './UserProfileTemplate.styles';

function UserProfileTemplate(props) {

    const location = useLocation();
    const getCategory = /^.*\/(.*)$/;
    const userPathname = location.pathname.match(getCategory)[1];
    const currentColor = 'hsl(233.8, 20.2%, 37.8%)';
    const isUserLogged = !(props.match.url === location.pathname);
    const [ status, setStatus ] = useState(false)
    const [ isModalOpen, setToggleModal ] = useState(false);

    ///REDUX STORE
    const items = useSelector(state => state.items)
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem({ 
            id: `${ items.length }`,
            user_name: 'Anna_Roztocka',
            f_name: 'Anna',
            surname: 'Roztocka',
            category: 'Łazienka',
            name: `Sedes ${Math.random()}`,
            description: 'Lorem ipsum',
            img: 'https://cdn.statically.io/img/www.mebel-partner.pl/f=webp,q=70/templates/minet/img/12x.jpg',
            images: ['https://cdn.statically.io/img/www.mebel-partner.pl/f=webp,q=70/templates/minet/img/12x.jpg'],
            localization: 'Warszawa',
            price: 150,
            sold: false,
        }))
    }

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

    const UsrInf = items.find(element => element.user_name === userPathname)

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
                    {isUserLogged ? 
                        (<Button onClick = { handleAddItem }>DODAJ NOWY PRZEDMIOT</Button>) 
                        : 
                        (<Button openModal = { openModal }>NAPISZ WIADOMOŚĆ</Button>)
                    }
                </UserInformation>
        </Wrapper>
    )
}
export default UserProfileTemplate;