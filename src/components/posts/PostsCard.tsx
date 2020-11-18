import React from "react";
import { IPost } from "../../configuration/types";
import * as sc from "./extra/styles"
import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";

interface Props extends IPost {
    getPost: (id: number) => void;
}

const PostsCard: React.FC<Props> = (props) => {
    const {id, title, created_at, updated_at} = props;
    return (
            <sc.Card>
                <sc.CardTitle>{title}</sc.CardTitle>
                <sc.CardBottom>
                    <sc.CardText>Добавлен: {formatDistance(new Date(created_at), new Date(),{ locale: ru })}</sc.CardText>
                    <sc.CardText>Обновлен: {formatDistance(new Date(updated_at), new Date(),{ locale: ru })}</sc.CardText>
                    <sc.Button onClick={() => {props.getPost(id)}}>Читать</sc.Button>
                </sc.CardBottom>
            </sc.Card>
    )
}

export default PostsCard;