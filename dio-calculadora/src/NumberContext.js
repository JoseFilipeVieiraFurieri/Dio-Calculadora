import React, { createContext, useContext, useState } from 'react';

const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
    const [currentNumber, setCurrentNumber] = useState("0");

    return (
        <NumberContext.Provider value={{ currentNumber, setCurrentNumber }}>
            {children}
        </NumberContext.Provider>
    );
}

export const useNumber = () => useContext(NumberContext);