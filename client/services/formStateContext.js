import { createContext, useState, useContext } from 'react';

const FormStateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(6); 
  const [isVerticalNavbarOpen, setIsVerticalNavbarOpen] = useState(true); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <FormStateContext.Provider value={{ isVerticalNavbarOpen, setIsVerticalNavbarOpen, state, setState, isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </FormStateContext.Provider>
  );
};

export const useGetContext = () => {
  return useContext(FormStateContext);
};