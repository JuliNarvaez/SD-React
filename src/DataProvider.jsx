import { createContext, useState } from 'react';

const initialData = {
    profile: null,
    seedbeds: {},
    clients: {}
};

export const DataContext = createContext(initialData);

const DataProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);

    return (
        <DataContext.Provider value={{ profile, setProfile }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;