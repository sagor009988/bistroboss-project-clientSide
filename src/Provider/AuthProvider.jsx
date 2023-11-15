import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext,  useEffect,  useState } from 'react';
import auth from '../fireBase/firebase.congif';

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateProfileInfo=(name,photoUrl)=>{
       return updateProfile(auth.currentUser, {
            displayName:{name}, photoURL:{photoUrl}
          })
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth ,currentUser =>{
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            return unSubscribe()
        }
    },[])

    const authInfo={
        user,loading,createUser,loginUser,logout,updateProfileInfo
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;