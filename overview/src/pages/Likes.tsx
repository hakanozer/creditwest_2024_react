import React, { useContext, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'
import { Context } from '../utils/AppContext'

function Likes() {

  const [status, setStatus] = useState(true)

  const nameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (nameRef && nameRef.current) {
      nameRef.current?.focus()
      //nameRef.current.style.backgroundColor = "red";
    }
  }, [])

  // usecontext
  const context = useContext(Context)
  const newName = () =>  {
    if (status) {
      setStatus(false)
      context.setName('Berke Bilmem')
    }
  }
  
  // useRedux
  const selector = useSelector((items:StateType) => items.LikesReducer)
  useEffect(()  => {

  }, [])


  return (
    <>
      <h2>Likes</h2>
      <div>{JSON.stringify(selector)}</div>
      <div className='row'>
        <div className='col-sm-3'>
            <input ref={nameRef} className='form-control' placeholder='Name' />
        </div>
      </div>
      <button className='btn btn-danger' disabled={status} onClick={ () => ( status && (newName(), setStatus(false))) }>New Name</button>
    </>
  )
}

export default Likes