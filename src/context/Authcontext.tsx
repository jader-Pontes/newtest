import React,{createContext,useState}from 'react';

type ContextProvider={
  children: React.ReactNode;
}
type PropsUserContext={
  user:boolean;
  setUser:(newUser:boolean)=>void
}

const initialState={
  user:false,
  setUser:()=>{},
}

export const authContext=createContext<PropsUserContext>(initialState);

export const AuthProvider=({children}:ContextProvider)=>{
  const[user,setUser]=useState<boolean>(initialState.user)

    return (
      <authContext.Provider value={{user,setUser}}>
        {children} 
      </authContext.Provider>
    )
}

