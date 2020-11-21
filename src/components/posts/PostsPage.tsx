import React from "react";
import PostsCard from "./PostsCard";
import {Store, StoreContext} from "../../configuration/store";
import { observer } from "mobx-react"
import { PostSection } from "./extra/styles";

interface Props {
    history: any
}

const PostsPage: React.FC<Props> = observer((props) => {
    const store: Store = React.useContext(StoreContext);

    const getPost = async (id: number) => {
        // await store.setPost(id);
        // await store.setComments(id)
        props.history.push(`/posts/${id}`);
    }

    return (
        <PostSection>
            {store.usersPosts.length > 0 ? store.usersPosts.map((post) => {
                return (
                    <PostsCard id={post.id}
                           key={post.id}
                           getPost={ getPost }
                           user_id={post.user_id}
                           title={post.title}
                           body={post.body}
                           created_at={post.created_at}
                           updated_at={post.updated_at}/>
                )
            }) : <div>Постов нет</div>}
        </PostSection>
    )
});

export default PostsPage;