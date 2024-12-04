"use client"
import { createContext, useState, useContext } from 'react';

const FormStateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(4); 
  const [isVerticalNavbarOpen, setIsVerticalNavbarOpen] = useState(true); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formId, setFormId] = useState({
    id:"", formName:""
  });


  return (
    <FormStateContext.Provider value={{ isVerticalNavbarOpen, setIsVerticalNavbarOpen, state, setState, isSidebarOpen, setIsSidebarOpen, setFormId ,formId}}>
      {children}
    </FormStateContext.Provider>
  );
};

export const useGetContext = () => {
  return useContext(FormStateContext);
};