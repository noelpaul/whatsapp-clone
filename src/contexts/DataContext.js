import React, { useState, createContext } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const data = useState(
        (localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : {
            chats: [
                {
                    username: 'S1 2021',
                    messages: [
                        {
                            body: 'a message',
                            time: '9:35 am'
                        },
                        {
                            body: '+ 91 7738872728: 3 ejj',
                            time: '9:45 am'
                        }
                    ]
                },
                {
                    username: '10C SJHS 2021-22',
                    messages: [
                        {
                            body: 'a message 2',
                            time: '11:35 am'
                        },
                        {
                            body: '+ 91 7738872728: 3 ejj2',
                            time: '11:45 am'
                        }
                    ]
                }
            ]
        }
    );
    
    return(
        <DataContext.Provider value={{ data }} >
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;