import React, { useState, createContext } from 'react';

export const Selector = createContext();

export const SelectorTemplate = ({ children }) => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    return (
        <Selector.Provider value={{ selectedTemplate, setSelectedTemplate }}>
            {children}
        </Selector.Provider>
    );
};
