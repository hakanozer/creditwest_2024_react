import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { IUser } from '../models/IUser'

function Sample() {

  const location = useLocation()
  const [status, setStatus] = useState(false)
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cidData, setCidData] = useState('')

  const params = useParams() 
  const [searchParams, setSearchParams] = useSearchParams()

  const [dataUser, setDataUser] = useState<IUser>()
  useEffect(() => {

    if(location.state) {
        const user = location.state as IUser
        setDataUser(user)
        console.log(user.email)
    }

    const userId = searchParams.get("userID")
    const cid = searchParams.get("cid")
    if (userId) {
        console.log(userId)
    }
    if (cid) {
        console.log(cid)
        setCidData(cid)
    }
  }, [])

  useEffect(() => {
    setStatus(false)
    if (username === 'ali') {
        setStatus(true)
    }
    setTimeout(() => {
        console.log(username, password)
    }, 3000);
    console.log("this line call")
  }, [username])


  return (
    <>
         { dataUser &&
            <h2>{dataUser.name.length}</h2>
         }

         {
            dataUser === null && 
            <div>Loading..</div>
         }

         {
            dataUser ? <h3>{dataUser.name.length}</h3> : <div>Loading..</div>
         }
        
        <h2>{params.id}</h2>
        <h3>{cidData}</h3>
        <input onChange={(evt) => setUsername(evt.target.value)} placeholder='username' />
        <input onChange={(evt) => setPassword(evt.target.value)}  placeholder='password' />
        <hr/>
        <button className={'btn ' + (status === true ? 'btn-danger' : 'btn-success')}>Send</button>
    </>
  )
}

export default Sample