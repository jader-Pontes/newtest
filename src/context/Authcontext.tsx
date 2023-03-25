import React,{createContext,useState,useContext}from 'react';

type ContextProvider={
  children: React.ReactNode
}

export const authContext=createContext({user:false,setUser:(user:boolean)=>{}});

export const AuthProvider=({children}:ContextProvider)=>{
  const[user,setUser]=useState<boolean>(false)
    return (
      <authContext.Provider value={{user,setUser}}>
        {children} 
      </authContext.Provider>
    )
}

export function AuthValue() {
  return useContext(authContext);
}