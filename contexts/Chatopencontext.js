import React, { useState, createContext } from 'react';

export const Chatopencontext = createContext();

export const Chatopenprovider = (props) => {
  const [closeopen, setcloseopen] = useState([ 100, null, 'loading' ]);
  return(
    <Chatopencontext.Provider value={[ closeopen, setcloseopen ]}>
      { props.children }
    </Chatopencontext.Provider>
  );
}