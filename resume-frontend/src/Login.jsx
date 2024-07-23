import React, { useState, createContext } from 'react';
export const MatcherContext = createContext();
export const MatcherProvider = ({ children }) => {
    const [match, setMatch] = useState(false);

    return (
        <MatcherContext.Provider value={{ match, setMatch }}>
            {children}
        </MatcherContext.Provider>
    );
};
