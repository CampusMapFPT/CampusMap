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
  roomList: any;
  SetEvent: Function;
  SetRoomList: Function;
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
  roomList: null,
  SetRoomList: () => { },
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
  const [directionFrom, setDirectionFrom] = useState<any | null>(initialState.directionFrom);
  const [directionTo, setDirectionTo] = useState<any | null>(initialState.directionTo);
  const [roomList, setRoomList] = useState<any | null>(initialState.roomList);

  function SetEvent(event: any) {
    if (event != null) setEvent(event);
    else setEvent(null);
  }
  function SetRoomList(event: any) {
    if (event != null) setRoomList(event);
    else setRoomList(null);
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
        roomList,
        SetRoomList,
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
