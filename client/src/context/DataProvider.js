import { createContext, useState } from 'react';

//State ko bna ker contextapi se kisi bh component
//m use krskt hn or pht app.js me route pages ko 
//wrapp krna hoga 

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [account, setAccount ] = useState('');

    return (
        <DataContext.Provider value={{
            account,
            setAccount
        }}>
            { children }

        </DataContext.Provider>
    )
}
export default DataProvider