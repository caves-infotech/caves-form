import { createContext, useState, useContext } from 'react';

const FormStateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(1); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 


  return (
    <FormStateContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, state, setState }}>
      {children}
    </FormStateContext.Provider>
  );
};

export const useGetContext = () => {
  return useContext(FormStateContext);
};