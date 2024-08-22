import React from 'react'
import { getUser } from '../utils/Util'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Control( props: {item: JSX.Element} ) {
 const userObj = getUser()
  return (
    <>
        { userObj 
        ? 
           <>
            <Navbar user={userObj}/>
            {props.item}
           </> 
        : 
            <Navigate to={'/'} />
        }
    </>
  )
}

export default Control