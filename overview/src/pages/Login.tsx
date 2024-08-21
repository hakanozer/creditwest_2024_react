﻿import { FormEvent, useState } from 'react'
import { encrypt, validUserLogin } from '../utils/Util'
import { NavLink, useNavigate } from 'react-router-dom'
import { login } from '../services/customer'
function Login() {

    const navigate = useNavigate()

    // useState
    const [username, setUserName] = useState('emilys')
    const [password, setPassword] = useState('emilyspass')
    const [errorMessage, setErrorMessage] = useState('')

    const userLogin = (evt: FormEvent) => {
        evt.preventDefault() // form gönderimini durdur.
        const status = validUserLogin(username, password)
        if (status) {
            setErrorMessage('')
            login(username, password).then(res => {
                const dt = res.data
                const stUser = JSON.stringify(dt)
                const encUser = encrypt(stUser)
                localStorage.setItem('user', encUser)
                navigate('/dashboard', {replace: true})
            }).catch(err => {
                console.log("error", err.response.status)
                console.log(err.message)
                setErrorMessage(err.message)
            }).finally(() => {
                console.log("finish")
            })
            console.log("this line call")
            
            //
        }
    }

    return (
        <>
            <div className= "row">
            <div className="col-sm-4"></div>
            <div className = "col-sm-4">
                <h2>User Login </h2>
                    { errorMessage && 
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Error!</strong> {errorMessage}
                            <button onClick={() => setErrorMessage('')} type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                    }
                    <form onSubmit = { userLogin }>
                    <div className="mb-3" >
                    <input defaultValue={username} required onChange={ (evt) => setUserName(evt.target.value) } className = "form-control" placeholder = "username" />
                            </div>
                    <div className="mb-3">
                        <input defaultValue={password} required onChange={ (evt) => setPassword(evt.target.value) } type="password" className="form-control" placeholder = "password" />
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