import React from "react";
import * as sc from "../navigation/extra/styles"
import { Link } from "react-router-dom";
import {toJS} from "mobx";
import {Store, StoreContext} from "../../configuration/store";

const Navigation: React.FC = () => {
    const store: Store = React.useContext(StoreContext);

    const showPost = () => {
        console.log(toJS(store))
    }
    return (
        <sc.NavSection>
            <Link to="/users/">
            <sc.MenuItem>
                    <img src={sc.img.userIcon} alt="Пользователи"/>
                    <sc.UserText>Пользователи</sc.UserText>
            </sc.MenuItem>
            </Link>
            <Link to="/">
                <sc.MenuItem>
                    <img src={sc.img.userIcon} alt="Пользователи"/>
                    <sc.UserText>В корень</sc.UserText>
                </sc.MenuItem>
            </Link>
            <button onClick={() => showPost()}>Store</button>
        </sc.NavSection>
    )
}

export default Navigation;