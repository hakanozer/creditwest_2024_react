import CryptoJS from 'crypto-js'
import { ICustomer } from '../models/ICustomer'

const key = process.env.REACT_APP_KEY ?? ''

export const validUserLogin = (username: string, password: string): boolean => {
    if (username === '' || password === '') {
        return false
    }
    return true
}

export const encrypt = (plainText: string) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, key).toString()
    return cipherText
}

export const decrypt = (cipherText: string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, key)
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
}

export const getUser = () => {
    const stUser = localStorage.getItem('user')
    if (stUser) {
        try {
            const plainUser = decrypt(stUser)
            const objUser:ICustomer = JSON.parse(plainUser)
            return objUser
        } catch (error) {
            localStorage.removeItem('user')
        }
    }
    return null
}