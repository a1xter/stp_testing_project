import React from "react";
import * as sc from "../navigation/extra/styles"
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {

    return (
        <sc.NavSection>
            <Link to="/users/">
            <sc.MenuItem>
                    <img src={sc.img.userIcon} alt="Пользователи"/>
                    <sc.UserText>Пользователи</sc.UserText>
            </sc.MenuItem>
            </Link>
        </sc.NavSection>
    )
}

export default Navigation;