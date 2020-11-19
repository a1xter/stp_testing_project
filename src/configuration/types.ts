export interface IUser {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface IPost {
    id?: number;
    user_id?: number;
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
}

export interface IStore {
    usersPage: {
        pageCount: number;
    };
    users: IUser[];
    selectedID: number | null;
    usersPosts: IPost[];
    setNewPage(): void;
    getUsers(): void;
}

export interface IComment {
    body: string;
    name: string;
    email: string;
    created_at: string;
    id: null | number;
}