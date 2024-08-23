import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'
import { Context } from '../utils/AppContext'

function Likes() {

  // usecontext
  const context = useContext(Context)
  const newName = () =>  {
    context.setName('Berke Bilmem')
  }
  
  // useRedux
  const selector = useSelector((items:StateType) => items.LikesReducer)
  useEffect(()  => {

  }, [])


  return (
    <>
      <h2>Likes</h2>
      <div>{JSON.stringify(selector)}</div>
      <button className='btn btn-danger' onClick={newName}>New Name</button>
    </>
  )
}

export default Likes