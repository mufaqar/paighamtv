import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [modalIsOpen, setModelIsOpen] = useState(false);
  const [videoLink, setVideoLink] = useState()

  // hide site scrolling when model box is true state
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup the class on component unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [modalIsOpen]);

  return (
    <SettingsContext.Provider
      value={{
        modalIsOpen,
        setModelIsOpen,
        setVideoLink,
        videoLink
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

