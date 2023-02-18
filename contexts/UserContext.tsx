import { ReactNode, createContext, useState, useEffect } from "react";
import { TUser } from "types/user";

export type initialStateProps = {
  user: TUser | null;
  accessToken: string | null;
  SetUser: Function;
  SetAccessToken: Function;
};

const initialState: initialStateProps = {
  user: null,
  accessToken: null,
  SetUser: () => {},
  SetAccessToken: () => {},
};

const UserContext = createContext(initialState);

type UserContextProviderProps = {
  children: ReactNode;
};

function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<TUser | null>(initialState.user);
  const [accessToken, setAccessToken] = useState<string | null>(
    initialState.accessToken
  );

  function SetUser(user: TUser) {
    if (user != null) setUser(user);
    else setUser(null);
  }
  function SetAccessToken(accessToken: string) {
    if (accessToken != null) setAccessToken(accessToken);
    else setAccessToken(null);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        accessToken,
        SetUser,
        SetAccessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContextProvider, UserContext };
