import React, { useState } from 'react';
import Button from 'Components/atoms/Button/Button';
import Input from 'Components/atoms/Input/Input.js';
import Header from 'Components/atoms/Header/Header.js';
import { Link } from 'react-router-dom';
import { StyledFormWrapper, StyledHeaderWrapper, StyledDataWrapper, RecoveryWrapper } from './LoginForm.styles';

function LoginForm(props){

    const { closeModal } = props;

    const [ formType, setFormType ] = useState('Login') 
    const [ logged, setLogged ] = useState('')

    const showLoginForm = () => {
        setFormType('Login')
    }
    const showRegisterForm = () => {
        setFormType('Register')
    }

    const forgotPassword = () => {
        setFormType('RecoverPassword')
    }

    return(
        <StyledFormWrapper>
            <StyledHeaderWrapper>
                <Header tertiary>
                    {formType === 'Login' || formType ==='Register' ? 
                        <>
                            <span onClick = { showLoginForm } style = {{ textDecoration: formType === 'Login' ? 'underline' : 'none' }}>LOGOWANIE</span> / 
                            <span onClick = { showRegisterForm } style = {{ textDecoration: formType === 'Register' ? 'underline' : 'none' }}>REJESTRACJA</span>
                        </>
                        : null
                    }
                </Header>
            </StyledHeaderWrapper>
            <StyledDataWrapper>
                <form>
                    { formType === 'Login' ? 
                        <>
                            <div>
                                <label>Podaj login</label>
                                <Input contact type = 'text' name = 'Login' onChange = {(e) => setLogged(e.target.value)} required />
                            </div>
                            <div>
                                <label>Podaj hasło</label>
                                <Input contact type = 'text' name = 'Password'/>
                            </div>
                            <span>
                                <input type = 'checkbox' />
                                <label>Zapamiętaj mnie</label>
                            </span>
                                <Link to = { `/user_name/${logged}/${logged}` }>
                                    <Button onClick = { closeModal }>ZALOGUJ SIĘ</Button>
                                </Link>
                            <div>
                                <span onClick = { forgotPassword }>Zapomaniałeś hasła?</span>
                            </div>
                        </> : null
                    }
                    { formType === 'Register' ?
                    <> 
                        <div>
                            <label>Imię</label>
                            <Input contact type = 'text' name = 'Name'/>
                        </div>
                        <div>
                            <label>Nazwisko</label>
                            <Input contact type = 'text' name = 'Surname'/>
                        </div>
                        <div>
                            <label>Adres mailowy</label>
                            <Input contact type = 'text' name = 'Mail'/>
                        </div>
                        <div>
                            <label>Hasło</label>
                            <Input contact type = 'text' name = 'Password'/>
                        </div>
                        <div>
                            <label>Powtórz hasło</label>
                            <Input contact type = 'text' name = 'Password'/>
                        </div>
                        <span>
                            <input type = 'checkbox' />
                            <label>Zapoznałem się z treścią regulaminu</label>
                        </span>
                        <Button>ZAREJESTRUJ SIĘ</Button>
                    </> : null
                    }  
                    { formType === 'RecoverPassword' ? 
                        <RecoveryWrapper>
                            <Header tertiary style = {{ textDecoration: 'underline' }}>RESETOWANIE HASŁA</Header>
                            <label>PODAJ ADRES MAILOWY</label>
                            <Input contact type = 'text' name = ''/>
                            <Button>RESETUJ HASŁO</Button>
                        </RecoveryWrapper> : null
                    }
                </form>
            </StyledDataWrapper>
        </StyledFormWrapper>
    )
}

export default LoginForm;