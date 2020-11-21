export default class ApiService {
    private _apiBase = 'https://gorest.co.in/public-api';

    getResource = async (url: string) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    }

    getAllUsers = async (page: number) => {
        return await this.getResource(`/users?page=${page}`);
    }

    getUsersPosts = async (id: number) => {
        const res = await this.getResource(`/users/${id}/posts`);
        return res.data;
    }

    getPost = async (id: number) => {
        const res = await this.getResource(`/posts/${id}`);
        return res.data;
    }

    getComments = async (id: number) => {
        const res = await this.getResource(`/posts/${id}/comments`);
        return res.data;
    }

    async getPostsComments(id: number) {
        const res = await this.getResource(`/comments?post_id=${id}`);
        return res.data;
    }
}