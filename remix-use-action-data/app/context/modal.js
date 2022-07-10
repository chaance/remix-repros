import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ProvideModal = ( { children } ) => {

    return <Context.Provider value={ useState( false ) } >{ children }</Context.Provider>

};

export const useModal = () => {

    return useContext( Context );

};