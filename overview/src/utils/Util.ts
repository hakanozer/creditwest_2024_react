import CryptoJS from 'crypto-js'

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