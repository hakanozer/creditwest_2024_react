export const validUserLogin = (username: string, password: string): boolean => {
    if (username === '' || password === '') {
        return false
    }
    return true
}