import React, { Component} from "react";
import * as sc from "./extra/styles"
import {IComment} from "../../configuration/types";
import Comment from "../comments/comment";

interface Props {
    postID: number;
    getPost(id: number): Promise<any>;
    getComments(id: number): Promise<any>;
}

class Post extends Component <Props> {
    state = {
        post: {
            title: '',
            body: ''
        },
        comments: [],
        showComments: false,
    }

    componentDidMount() {
        const { getPost, postID, getComments } = this.props;
        getPost(postID)
            .then(post => this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            }))
        getComments(postID)
            .then(comments => this.setState({
                comments: comments
            }))
    }

    setShowComments() {
        this.setState({showComments: true})
    }

    render() {
        const {post} = this.state;
        const {comments, showComments} = this.state;
        if (!post.title || !post.body) {
            return <div>Loading</div>
        }
        return (
            <sc.Wrapper>
                <sc.Content>
                    <sc.TextWrapper>
                        <sc.PostsTitle>{post.title ? post.title : <div>No Data</div>}</sc.PostsTitle>
                        <sc.PostsBody>{post.body ? post.body : <div>No Data</div>}</sc.PostsBody>
                    </sc.TextWrapper>

                    {comments && comments.length > 0 ?
                        showComments ?
                            <>
                                <sc.PostsTitle>Комментарии:</sc.PostsTitle>
                                {comments.map((comment:IComment) => {
                                    return <Comment body={comment.body}
                                                    key={comment.id}
                                                    name={comment.name}
                                                    email={comment.email}
                                                    created_at={comment.created_at} />
                                })}
                            </>
                            :
                            <sc.Button onClick={() => this.setShowComments()}>
                                Показать комментарии
                            </sc.Button>
                        : null}

                </sc.Content>
            </sc.Wrapper>
        )
    }
}

export default Post;