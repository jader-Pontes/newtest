import React,{useState,useContext} from "react";

//requisition
import { Requisition} from '../Hooks/useRequest'

//context
import {authContext} from '../../src/context/Authcontext'

export const Logger=(email:string,password:string)=>{
  const [users,setusers]=useState([Requisition.getAllUsers()])
    const{setUser}=useContext(authContext);

  if(email&&password){
    const info=users.some((value:any)=>{return value.email===email?true:false})
    setUser(info)
    return;
  }
  return setUser(false)
}