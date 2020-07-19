import { createContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false, 
    userId: '5f09aab6650dec5604290f2e',   // This will be automatic dohhhh
    login: () => {}, 
    logout: () => {} 
});