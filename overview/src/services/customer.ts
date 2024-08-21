import { ICustomer } from "../models/ICustomer"
import { config } from "./config"

export const login = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }
    return config.post<ICustomer>('auth/login', sendObj)
}