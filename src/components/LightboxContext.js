import React, { createContext, useContext, useState} from 'react';

const LightboxContext = createContext();

const LightboxProvider = ({children}) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const openLightbox = () => {
        console.log("openLightbox is called!")
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        console.log("closeLightbox is called!")
        setIsLightboxOpen(false);
    };

    return (
        <LightboxContext.Provider value={{isLightboxOpen,openLightbox,closeLightbox}}>
            {children}
        </LightboxContext.Provider>
    );
};

const useLightbox = () => {
    const context = useContext(LightboxContext);
    if (!context) {
        throw new Error('useLightbox must be used within a LightboxProvider')
    }
    return context;
};

export  {LightboxProvider, useLightbox};