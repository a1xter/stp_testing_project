export default class ApiService {
    private _apiBase = 'https://gorest.co.in/public-api';
    async getResource(url: string) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${url}`)
        }

        return await res.json();
    }

    async getAllUsers(page: number) {
        const res = await this.getResource(`/users?page=${page}`);
        return res.data;
    }

    async getUsersPosts(id: number) {
        const res = await this.getResource(`/users/${id}/posts`);
        return res.data;
    }

    async getPost(id: number) {
        const res = await this.getResource(`/posts/${id}`);
        return res.data;
    }

    async getComments(id: number) {
        const res = await this.getResource(`/posts/${id}/comments`);
        return res.data;
    }

    async getPostsComments(id: number) {
        const res = await this.getResource(`/comments?post_id=${id}`);
        return res.data;
    }
}