import { ReactNode, createContext, useState, useEffect } from "react";

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
  directionFrom: any;
  directionTo: any;
  SetEvent: Function;
  SetDirectionFrom: Function;
  SetDirectionTo: Function;
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
  directionTo: {},
  directionFrom: {},
  SetDirectionFrom: () => { },
  SetDirectionTo: () => { },
  SetEvent: () => { },
};

const GlobalContext = createContext(initialState);

type UserContextProviderProps = {
  children: ReactNode;
};

function GlobalContextProvider({ children }: UserContextProviderProps) {
  const [event, setEvent] = useState<any | null>(initialState.event);
  const [directionFrom, setDirectionFrom] = useState<any | null>(
    initialState.directionFrom
  );
  const [directionTo, setDirectionTo] = useState<any | null>(
    initialState.directionTo
  );

  function SetEvent(event: any) {
    if (event != null) setEvent(event);
    else setEvent(null);
  }

  function SetDirectionFrom(event: any) {
    if (event != null) setDirectionFrom(event);
    else setDirectionFrom(null);
  }
  function SetDirectionTo(event: any) {
    if (event != null) setDirectionTo(event);
    else setDirectionTo(null);
  }
  return (
    <GlobalContext.Provider
      value={{
        event,
        directionFrom,
        directionTo,
        SetDirectionFrom,
        SetDirectionTo,
        SetEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export { GlobalContextProvider, GlobalContext };
