import React,{createContext,useState}from 'react';
import { UsersTypes } from '../types/users';

type ContextProvider={
  children: React.ReactNode;
}

type PropsUserContext={
  user:boolean;
  setUser:(newUser:boolean)=>void;
  userId:any;
  setUserId:(user:[])=>void;
}

const initialState={
  user:false,
  setUser:()=>{},
  userId:[],
  setUserId:()=>{}
}

export const authContext=createContext<PropsUserContext>(initialState);

export const AuthProvider=({children}:ContextProvider)=>{
  const [user,setUser]=useState<boolean>(initialState.user)
  const [userId,setUserId]=useState(initialState.userId); 
  
    return (
      <authContext.Provider value={{user,setUser,userId,setUserId}}>
        {children} 
      </authContext.Provider>
    )
}

