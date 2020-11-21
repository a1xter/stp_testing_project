import React, { Component} from "react";
import * as sc from "./extra/styles"
import Comments from "../comments/Comments";

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
        const {post: {body, title}} = this.state;
        const {comments, showComments} = this.state;

        if (!title || !body) {
            return <div>Loading</div>
        }

        return (
            <sc.Wrapper>
                <sc.Content>
                    <sc.TextWrapper>
                        <sc.PostsTitle>{ title ? title : <div>No Data</div> }</sc.PostsTitle>
                        <sc.PostsBody>{ body ? body : <div>No Data</div> }</sc.PostsBody>
                    </sc.TextWrapper>

                    {comments && comments.length > 0 ?
                        showComments ?
                            <Comments comments={comments}/>
                            : <sc.Button onClick={() => this.setShowComments()}>
                                    Показать комментарии
                              </sc.Button>
                        : null}

                </sc.Content>
            </sc.Wrapper>
        )
    }
}

export default Post;