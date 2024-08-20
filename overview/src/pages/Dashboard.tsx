import React from 'react'
import { NavLink } from 'react-router-dom'

function Dashboard() {
  const links = [
    {id: 100, title: 'TV'},
    {id: 101, title: 'iPhone'},
    {id: 102, title: 'Samsung'},
    {id: 104, title: 'Tablet'},
  ]  
  return (
    <>
        <NavLink to={'/sample/'+110}>Goto Sample</NavLink>
        {links.map((item, index) =>
            <React.Fragment key={index}>
                <NavLink  to={'/sample/'+item.id}>{item.title}</NavLink>
            </React.Fragment>
        )}
        <hr/>
        <NavLink to={'/sample/100?userID=50&cid=150'}>Query String</NavLink>
    </>
  )
}

export default Dashboard