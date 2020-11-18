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
    id: number;
    user_id: number;
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
}

export interface IStore {
    users: IUser[];
    selectedID: number | null;
    usersPosts: IPost[];
}