import React, { useState } from "react";
import Opration from "../Controler/Opration-DB";

export const TaskContext=React.createContext({
  taskArray:[],
  settask:()=>{},
  Opration:null,
});

export const TaskContextHandle=(props)=>{
  let[taskArray,settask]=useState([]);
  return (
    <TaskContext.Provider value={{
      taskArray:taskArray,
      settask:settask,
      Opration:new Opration(),
    }}>
    {props.children}
    </TaskContext.Provider>
  ); 
}