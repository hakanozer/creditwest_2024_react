﻿import { FormEvent, useState } from 'react'
import { validUserLogin } from '../utils/Util'
import { NavLink, useNavigate } from 'react-router-dom'
import { login } from '../services/customer'
function Login() {

    const navigate = useNavigate()

    // useState
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = (evt: FormEvent) => {
        evt.preventDefault() // form gönderimini durdur.
        const status = validUserLogin(username, password)
        if (status) {
            login(username, password).then(res => {
                const dt = res.data
                console.log(dt)
            }).catch(err => {
                console.log("error", err.response.status)
                console.log(err.message)
            }).finally(() => {
                console.log("finish")
            })
            console.log("this line call")
            
            //navigate('/dashboard')
        }
    }

    return (
        <>
            <div className= "row">
            <div className="col-sm-4"></div>
            <div className = "col-sm-4">
                <h2>User Login </h2>
                    <h3> {username} </h3>
                    <form onSubmit = { userLogin }>
                    <div className="mb-3" >
                    <input required onChange={ (evt) => setUserName(evt.target.value) } className = "form-control" placeholder = "username" />
                            </div>
                    <div className="mb-3">
                        <input required onChange={ (evt) => setPassword(evt.target.value) } type="password" className="form-control" placeholder = "password" />
                            </div>
                        <button className="btn btn-success">Send</button>
                        <NavLink className='btn btn-danger' to='/register' >Register</NavLink>
                    </form>
                </div>
                <div className = "col-sm-4"></div>
            </div>
        </>

    )
}

export default Login