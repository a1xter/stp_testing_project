import React, { Component} from "react";
import * as sc from "./extra/styles"
import Comments from "../comments/Comments";

interface Props {
    postID: number;
    getPost(id: number): Promise<any>;
    getComments(id: number): Promise<any>;
    state: any
    setShowComments(): void;
}

interface PropsView {
    getPost(id: number): Promise<any>;
    postID: number;
    getComments(id: number): Promise<any>;
}

const Post: React.FC <Props> = (props) => {
    const {post: {body, title}, comments, showComments} = props.state;

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
                        : <sc.Button onClick={() => props.setShowComments()}>
                            Показать комментарии
                        </sc.Button>
                    : null}

            </sc.Content>
        </sc.Wrapper>
    )
}

const withData = (View: React.FC<Props>) => {
    return class extends Component <PropsView> {

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
                .then((post: any) => this.setState({
                    post: {
                        title: post.title,
                        body: post.body
                    }
                }))
            getComments(postID)
                .then((comments: any) => this.setState({
                    comments: comments
                }))
        }

        setShowComments = () => {
           this.setState({
               showComments: true
           })
        }

        render() {
            if (!this.state.post.title || !this.state.post.body) {
                return <div>Loading</div>
            }
            return <View postID = {this.props.postID}
                         getPost = {this.props.getPost}
                         getComments = {this.props.getComments}
                         setShowComments={this.setShowComments}
                         state={this.state}/>;
        }
    }
}

export default withData(Post);