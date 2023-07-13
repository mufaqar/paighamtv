import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [modalIsOpen, setModelIsOpen] = useState(false);
  const [SearchModalIsOpen, setSearchModalIsOpen] = useState(false);
  const [videoLink, setVideoLink] = useState()
  const [SetctedCategory, setCategory] = useState('Ramadan')


  // hide site scrolling when model box is true state
  useEffect(() => {
    if (modalIsOpen || SearchModalIsOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup the class on component unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [modalIsOpen, SearchModalIsOpen]);

  return (
    <SettingsContext.Provider
      value={{
        modalIsOpen,
        setModelIsOpen,
        setVideoLink,
        videoLink,
        SearchModalIsOpen, 
        setSearchModalIsOpen,
        SetctedCategory, setCategory,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

