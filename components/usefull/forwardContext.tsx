import { useContext, createElement } from 'react';

export const forwardContext = (Context: any) => (Component: any) => ({ children, ...props }: any) => {
    const value = useContext(Context);
    const wrapped = createElement(Context.Provider, { value }, children);
    return createElement(Component, props, wrapped);
};