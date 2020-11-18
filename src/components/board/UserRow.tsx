import React from "react";
import { IUser } from "../../configuration/types";
import * as sc from "./extra/styles"

interface Props extends IUser {
    isSelected: boolean;
    setSelected: (id: number) => void;
    getPosts: (id: number) => void;
}
const UserRow: React.FC<Props> = (props) => {
    const {name, email, gender, status, created_at, updated_at, isSelected, id, getPosts} = props;
    return (
        <sc.UserWrapper isSelected={isSelected}
                    onClick={() => props.setSelected(id)}>
            <sc.UserTextWrapper>
                <sc.UserTextRow>
                    <sc.UserName>{name}</sc.UserName>
                    <sc.UserText>{email}</sc.UserText>
                </sc.UserTextRow>
                <sc.UserTextRow>
                    <sc.UserText>Статус: {status === "Active" ? "Активный" : "Не активный"}</sc.UserText>
                    <sc.UserText>Пол: {gender === 'Female' ? "Женский" : "Мужской"}</sc.UserText>
                    <sc.UserText>Создан: {created_at}</sc.UserText>
                    <sc.UserText>Обновлен: {updated_at}</sc.UserText>
                </sc.UserTextRow>
            </sc.UserTextWrapper>
            {isSelected ? <sc.Button onClick={() => getPosts(id)}>Показать посты</sc.Button> : null}
        </sc.UserWrapper>
    )
}

export default UserRow;