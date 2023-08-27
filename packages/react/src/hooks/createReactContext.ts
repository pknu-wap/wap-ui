import React from 'react';

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

interface CreateReactContextProps<T> {
  name?: string;
  errorMessage?: string;
  defaultValue?: T;
}

const createReactContext = <T>(props: CreateReactContextProps<T> = {}) => {
  const { name, errorMessage, defaultValue } = props;

  const Context = React.createContext<T | undefined>(defaultValue);

  Context.displayName = name;

  const useContext = () => {
    const value = React.useContext(Context);
    if (!value) {
      throw new Error(
        errorMessage || 'useContext must be used within a Provider',
      );
    }
    return value;
  };
  return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
};

export default createReactContext;
