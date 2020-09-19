import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { Button } from 'reactstrap';
import {MDBIcon} from 'mdbreact'

const LogoutButton = () => {

  const {logout, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
    <Button color="aqua-gradient" onClick={()=> logout()}><MDBIcon className="mr-2" size="1x" icon="sign-out-alt" />
        Выход
    </Button>
    ) 
  )
}

export default LogoutButton
