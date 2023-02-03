import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase/firebase.config'

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    // 1. Register new user
    const register = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // 2. login existing user
    const login = (email,passwoord) => {
        return signInWithEmailAndPassword(auth,email,passwoord);
    }

    // 3. Set observer
    const authObserver = (auth, user) => {
        return onAuthStateChanged(auth, (user));
    }

    const authInfo = {register, login, authObserver};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;