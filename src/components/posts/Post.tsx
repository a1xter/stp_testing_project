import React, { useEffect, useState } from "react";
import Comment from "../comments/comment";
import * as sc from "./extra/styles"
import {IComment, IPost} from "../../configuration/types";

interface Props {
    postID: number;
    setPost(id: number): void;
    setComments(id: number): void;
    post: IPost;
    comments: IComment[];
}

const Post: React.FC<Props> = (props) => {

    const [showComments, setShowComments] = useState(false)

    useEffect(() => {
        props.setPost(props.postID)
        props.setComments(props.postID)
    },[]);

    return (
        <sc.Wrapper>
            <sc.Content>
                <sc.TextWrapper>
                    <sc.PostsTitle>{props.post.title}</sc.PostsTitle>
                    <sc.PostsBody>{props.post.body}</sc.PostsBody>
                </sc.TextWrapper>

                {props.comments.length > 0 ?
                        showComments ?
                            <>
                                <sc.PostsTitle>Комментарии:</sc.PostsTitle>
                                {props.comments.map((comment:IComment) => {
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