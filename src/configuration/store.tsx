import {action, makeAutoObservable} from "mobx"
import React from "react";
import ApiService from "../remote/api-service";
import {IComment, IPost, IUser} from "./types";

const api = new ApiService();


export class Store {
    usersPage = {
        pageCount: 67
    };
    users: IUser[] = [];
    selectedID: number | null = null;
    usersPosts: IPost[] = [];
    post: IPost = {
        title: '',
        body: '',
        created_at: '',
        updated_at: ''
    };
    comments: IComment[] = []

    constructor() {
        makeAutoObservable(this);
    }
    //todo -> rewrite all methods like this (with action)
    getUsers = () => {
        api.getAllUsers(1).then(
            action('getUsersDone', (users: IUser[]) => {
                this.users = users;
            })
        )
    }

    setNewPage(data: any) {
        const id = data.selected + 1;
        api.getAllUsers(id).then((users) => {
            this.users = users;
        })
    }

    setUsersPosts(userID: number) {
        api.getUsersPosts(userID).then((posts) => {
            store.usersPosts = posts;
        })
    }

    setPost = (postID: number) => {
        api.getPost(postID).then((post) => {
            this.post = post;
        })
    }

    setComments = (postID: number) => {
        api.getComments(postID).then((item) => this.comments = item)
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