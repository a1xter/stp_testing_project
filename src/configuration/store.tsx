import { useLocalStore } from "mobx-react";
import React from "react";
import { IStore } from "./types";

export const StoreContext = React.createContext({
    users: [],
    selectedID: null,
    usersPosts: []
});

const StoreProvider: React.FC = ({children}) => {
    const store: IStore = useLocalStore(() => ({
        users: [],
        selectedID: null,
        usersPosts: []
    }));

    return (
        <StoreContext.Provider
            //@ts-ignore
            value={store}>{children}</StoreContext.Provider>
    )
}

export default StoreProvider;