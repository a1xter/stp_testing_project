import * as sc from "../posts/extra/styles";
import {IComment} from "../../configuration/types";
import Comment from "./comment";
import React from "react";

interface Props {
    comments: IComment[];
}

const Comments: React.FC<Props>= (props) => {
    return (
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
    )
}

export default Comments;