import { ReactNode, createContext, useState, useEffect } from "react";
import { TUser } from "types/user";
import { string } from "yup";

export type initialStateProps = {
  event: {
    image: string;
    title: string;
    unit: string;
    time: string;
    location: string;
    content: string;
    header: string;
  };
  SetEvent: Function;
};

const initialState: initialStateProps = {
  event: {
    image: "",
    title: "",
    unit: "",
    time: "",
    location: "",
    content: "",
    header: "",
  },
  SetEvent: () => {},
};

const GlobalContext = createContext(initialState);

type UserContextProviderProps = {
  children: ReactNode;
};

function GlobalContextProvider({ children }: UserContextProviderProps) {
  const [event, setEvent] = useState<any | null>(initialState.event);

  function SetEvent(event: any) {
    if (event != null) setEvent(event);
    else setEvent(null);
  }

  return (
    <GlobalContext.Provider
      value={{
        event,
        SetEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export { GlobalContextProvider, GlobalContext };
