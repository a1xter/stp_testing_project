import {action, makeObservable, observable} from "mobx"
import React from "react";
import ApiService from "../remote/api-service";
import {IPost, IUser} from "./types";

const api = new ApiService();

export class Store {
    usersPage = {
        pageCount: 1
    };
    users: IUser[] = [];
    selectedID: number | null = null;
    usersPosts: IPost[] = [];

    constructor() {
        makeObservable(this, {
            usersPage: observable,
            users: observable,
            selectedID: observable,
            usersPosts: observable,
            getUsers: action,
            setNewPage: action,
            setUsersPosts: action,
        });
    }

    getUsers = async () => {
        await api.getAllUsers(1)
            .then(action('setPageCount',
                (res: any) => {
                    this.usersPage.pageCount = res.meta.pagination.pages;
                    return res;
                }))
            .then(res => res.data)
            .then(action('getUsersDone',
                (users: IUser[]) => this.users = users))
    }

    setNewPage = async (data: any) => {
        const id = data.selected + 1;
        await api.getAllUsers(id)
            .then(res => res.data)
            .then(action('getNewPageDone',
                (users: IUser[]) => this.users = users))
    }

    setUsersPosts = async (userID: number) => {
        await api.getUsersPosts(userID).then(
            action('getUsersPostDone',
                (posts: IPost[]) => store.usersPosts = posts))
    }
}

const store = new Store();

export const StoreContext = React.createContext(store);

const StoreProvider: React.FC = ({children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;