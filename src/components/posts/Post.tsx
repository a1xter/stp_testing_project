import React, { useEffect, useState } from "react";
import ApiService from "../../remote/api-service";
import Comment from "../comments/comment";
import * as sc from "./extra/styles"

interface Props {
    postID: number;
}

const Post: React.FC<Props> = (props) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    });

    const [comments, setComments] = useState([
        {
            body: '',
            name: '',
            email: '',
            created_at: '',
            id: null
        }
    ]);

    const [showComments, setShowComments] = useState(false)

    const api = new ApiService();

    useEffect(() => {
        api.getPost(props.postID).then(post => setPost(post));
        api.getComments(props.postID).then((item) => setComments(item));
    },[]);

    return (
        <sc.Wrapper>
            <sc.Content>
                <sc.TextWrapper>
                    <sc.PostsTitle>{post.title}</sc.PostsTitle>
                    <sc.PostsBody>{post.body}</sc.PostsBody>
                </sc.TextWrapper>

                {comments.length > 0 ?
                        showComments ?
                            <>
                                <sc.PostsTitle>Комментарии:</sc.PostsTitle>
                                {comments.map((comment) => {
                                    return <Comment body={comment.body}
                                                    key={comment.id}
                                                    name={comment.name}
                                                    email={comment.email}
                                                    created_at={comment.created_at} />
                                })}
                            </>
                        : <sc.Button onClick={() => setShowComments(!showComments)}>Показать комментарии</sc.Button>
                    : null}

            </sc.Content>
        </sc.Wrapper>
    )
}

export default Post;