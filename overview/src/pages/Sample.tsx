import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Sample() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cidData, setCidData] = useState('')

  const params = useParams() 
  const [searchParams, setSearchParams] = useSearchParams()

  
  useEffect(() => {
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
    setTimeout(() => {
        console.log(username, password)
    }, 3000);
    console.log("this line call")
  }, [username])


  return (
    <>
        <h2>{params.id}</h2>
        <h3>{cidData}</h3>
        <input onChange={(evt) => setUsername(evt.target.value)} placeholder='username' />
        <input onChange={(evt) => setPassword(evt.target.value)}  placeholder='password' />
    </>
  )
}

export default Sample