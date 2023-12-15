import { createContext, useContext, useState} from 'react';

const IconContext = createContext();

export const IconProvider = ({ children }) => {
    const[selectedIcon, setSelectedIcon] = useState(null);

    const selectIcon = (icon) => {
        setSelectedIcon(icon);
    };

    return(
        <IconContext.Provider value={{selectedIcon,selectIcon}}>
            {children}
        </IconContext.Provider>

    );
};

export const useIconContext = () => {
    return useContext(IconContext);
}