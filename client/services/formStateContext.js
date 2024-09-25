import { createContext, useState, useContext } from 'react';

const FormStateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(1); 
  const [isVerticalNavbarOpen, setIsVerticalNavbarOpen] = useState(true); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <FormStateContext.Provider value={{ isVerticalNavbarOpen, setIsVerticalNavbarOpen, state, setState, isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </FormStateContext.Provider>
  );
};

export const useGetContext = () => {
  return useContext(FormStateContext);
};