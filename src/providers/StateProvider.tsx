import { createContext, useState } from 'react';

type ContextType = {
  isIntroLoaded: boolean;
  setIsIntroLoaded: (value: boolean) => void;
};

interface StateProps {
  children: React.ReactElement;
}

export const StateContext = createContext({} as ContextType);

export const StateProvider = ({ children }: StateProps) => {
  const [isIntroLoaded, setIsIntroLoaded] = useState(false);
  return (
    <StateContext.Provider
      value={{
        isIntroLoaded,
        setIsIntroLoaded,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
