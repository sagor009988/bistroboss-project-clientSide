import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext,  useEffect,  useState } from 'react';
import auth from '../fireBase/firebase.congif';
import useAxiosPublic from '../Hooks/useAxiosPublic';


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const googlProvider=new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const axiosPublic=useAxiosPublic()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const google=()=>{
        setLoading(true);
        return signInWithPopup(auth,googlProvider)
    }

    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateProfileInfo=(name,photoUrl)=>{
        console.log(name,photoUrl);
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photoUrl
          })
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth ,currentUser =>{
            setUser(currentUser)
            if(currentUser){
                // TODO:TOKEN create 
                const userInfo={
                    email:currentUser.email
                }
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }

                })
            }
            else{
                // remove 
                localStorage.removeItem('access-token')
            }
            setLoading(false)

        })
        return ()=>{
            return unSubscribe()
        }
    },[axiosPublic])

    const authInfo={
        user,loading,createUser,loginUser,logout,updateProfileInfo,google
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;