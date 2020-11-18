import React, { useEffect } from "react";
import Posts from "./PostsCard";
import { IStore } from "../../configuration/types";
import { StoreContext } from "../../configuration/store";
import { useObserver } from "mobx-react";
import ApiService from "../../remote/api-service";
import { PostSection } from "./extra/styles";

interface Props {
    userID: number;
    history: any
}

const PostsPage: React.FC<Props> = (props) => {
    const store: IStore = React.useContext(StoreContext);
    const api = new ApiService();

    useEffect(() => {
        api.getUsersPosts(props.userID).then((posts) => {
            store.usersPosts = posts;
        })
    }, [])

    const getPost = (id: number) => {
        props.history.push(`/posts/${id}`);
    }

    return useObserver(() => (
        <PostSection>
            {store.usersPosts.length > 0 ? store.usersPosts.map((post) => {
                return (
                    <Posts id={post.id}
                           key={post.id}
                           getPost={getPost}
                           user_id={post.user_id}
                           title={post.title}
                           body={post.body}
                           created_at={post.created_at}
                           updated_at={post.updated_at}/>
                )
            }) : <div>Постов нет</div>}
        </PostSection>
    ))
}

export default PostsPage;