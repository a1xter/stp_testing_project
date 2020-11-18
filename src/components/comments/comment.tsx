import React from "react";
import * as sc from "./extra/styles"

interface Props {
    body: string;
    name: string;
    email: string;
    created_at: string;
}

const Comment: React.FC<Props> = (props) => {
    const {body, name, email, created_at} = props;
    return (
        <sc.Wrapper>
            <sc.CommentBody>{body}</sc.CommentBody>
            <sc.SecondRow>
                <sc.CommentText>{name}</sc.CommentText>
                <sc.CommentText>{email}</sc.CommentText>
                <sc.CommentText>{created_at}</sc.CommentText>
            </sc.SecondRow>
        </sc.Wrapper>
    )
}

export default Comment;