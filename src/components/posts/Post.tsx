import React, { useEffect, useState } from "react";
import * as sc from "./extra/styles"
import Comments from "../comments/Comments";

interface PropsView {
    postID: number;
    getPost(id: number): Promise<any>;
    getComments(id: number): Promise<any>;
    state: any
    setShowComments(): void;
}

interface Props {
    getPost(id: number): Promise<any>;
    postID: number;
    getComments(id: number): Promise<any>;
}

const Post: React.FC <PropsView> = (props) => {
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

const useData = (postID: number, getPost: (id: number) => Promise<any>, getComments: (id: number) => Promise<any>) =>   {
    const [state, setState] = useState({
        post: {
            title: '',
            body: ''
        },
        comments: [],
        showComments: false,
    });

    useEffect(() => {
        let canceled = false;
        getPost(postID)
            .then((post: any) => {
                !canceled && setState((state) => {
                    return {
                        ...state,
                        post: {
                            title: post.title,
                            body: post.body
                        }
                    }
                })
            })

        getComments(postID)
            .then((comments: any) => {
                !canceled && setState((state) => {
                    return {
                        ...state,
                        comments: comments
                    }
                })
            })
        return () => {canceled = true;}
    }, [postID, getPost, getComments])

    return {state, setState};
}

const withData = (View: React.FC<PropsView>) => {
    return (props: Props) => {
        const {postID, getPost, getComments} = props;
        const data = useData(postID, getPost, getComments)


        const setShowComments = () => {
           data.setState((state) => {
               return {
                   ...state,
                   showComments: true
               }
           })
        }

        if (!data.state.post.title || !data.state.post.body) {
            return <div>Loading</div>
        }

        return <View postID = {props.postID}
                     getPost = {props.getPost}
                     getComments = {props.getComments}
                     setShowComments={setShowComments}
                     state={data.state}/>;
    }
}

export default withData(Post);