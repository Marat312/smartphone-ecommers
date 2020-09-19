import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { Button } from 'react-bootstrap';
import {MDBIcon} from 'mdbreact'

const LoginButton = () => {
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  
  return (
     !isAuthenticated && (
    <Button  onClick={()=> loginWithRedirect()}><MDBIcon className="mr-2" size="1x" icon="sign-in-alt" />
      Вход / Регистрация
    </Button>
    )
  )
}

export default LoginButton
