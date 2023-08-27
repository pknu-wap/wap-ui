import React from 'react';

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

interface UseCreateContextProps<T> {
  name?: string;
  errorMessage?: string;
  defaultValue?: T;
}

const useCreateContext = <T>(props: UseCreateContextProps<T> = {}) => {
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

export default useCreateContext;
