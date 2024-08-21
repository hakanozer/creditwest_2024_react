import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IUser } from '../models/IUser'
import { getUser } from '../utils/Util'

function Dashboard() {
  const links = [
    {id: 100, title: 'TV'},
    {id: 101, title: 'iPhone'},
    {id: 102, title: 'Samsung'},
    {id: 104, title: 'Tablet'},
  ] 
  
  const navigate = useNavigate()
  const user: IUser = {
      uid: 100,
      name: 'Erkan',
      surname: 'Bil',
      email: 'erkan@mail.com',
      password: '12345'
  }

  const sendObj = () => {
    navigate('/sample/100', { state: user })
  }

  
  return (
    <>
        <NavLink to={'/sample/'+110}>Goto Sample</NavLink>
        {links.map((item, index) =>
            <React.Fragment key={index}>
                <NavLink to={'/sample/'+item.id}>{item.title}</NavLink>
            </React.Fragment>
        )}
        <hr/>
        <NavLink to={'/sample/100?userID=50&cid=150'}>Query String</NavLink>
        <button onClick={sendObj} className='btn btn-danger'>Send Object</button>
    </>
  )
}

export default Dashboard