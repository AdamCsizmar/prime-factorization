import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  ReactNode,
} from "react";

type IAppContext = {
  numberOne: number;
  setNumberOne: Dispatch<SetStateAction<number>>;
  numberTwo: number;
  setNumberTwo: Dispatch<SetStateAction<number>>;
};

type ReactChildrenNode = {
  children: ReactNode;
};

export const AppContext = createContext<IAppContext>({
  numberOne: 0,
  numberTwo: 0,
  setNumberOne: () => {},
  setNumberTwo: () => {},
});

const AppContextProvider = ({ children }: ReactChildrenNode) => {
  const [numberOne, setNumberOne] = useState<number>(0);
  const [numberTwo, setNumberTwo] = useState<number>(0);

  const value = {
    numberOne,
    setNumberOne,
    numberTwo,
    setNumberTwo,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
