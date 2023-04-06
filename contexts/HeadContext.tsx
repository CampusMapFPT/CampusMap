import { ReactNode, createContext, useState } from "react";

export type initialStateProps = {
    pageTitle: any;
    SetPageTitle: Function;
};

const initialState: initialStateProps = {
    pageTitle: '',
    SetPageTitle: () => { },
};

const HeadContext = createContext(initialState);

type HeadContextProviderProps = {
    children: ReactNode;
};

function HeadContextProvider({ children }: HeadContextProviderProps) {
    const [pageTitle, setPageTitle] = useState<any | null>(initialState.pageTitle);

    function SetPageTitle(pageTitle: any) {
        if (pageTitle != null) setPageTitle(pageTitle);
        else setPageTitle(null);
    }
    return (
        <HeadContext.Provider
            value={{
                pageTitle,
                SetPageTitle
            }}
        >
            {children}
        </HeadContext.Provider>
    );
}

export { HeadContextProvider, HeadContext };
