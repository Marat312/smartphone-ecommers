import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
// import JSONPretty from 'react-json-pretty'

const Profile = () => {
  const {user, isAuthenticated} = useAuth0();
  // localStorage.setItem("authdata", JSON.stringify(user))
  
  return (
    isAuthenticated && (
    <div className="d-flex">
      <img src={user.picture} alt={user.name} style={{width:"50px", height:"50px"}}/>
      <div className="ml-1 d-flex align-items-center">
         <h6>{user.name}</h6>
         {/* <p>{user.email}</p> */}
      </div>
      
      {/* <JSONPretty data={user} /> */}
       {/* {JSON.stringify(user, null, 2)} */}
      
    </div>
    )
  )
}

export default Profile

