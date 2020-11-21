import React from "react";
import Navigation from "../navigation/Navigation";
import GlobalStyles from "../../configuration/global-styles"
import Board from "../board/Board";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostsPage from "../posts/PostsPage";
import Post from "../posts/Post";
import {Store, StoreContext} from "../../configuration/store";
import {observer} from "mobx-react";
import ApiService from "../../remote/api-service";

const App: React.FC = observer(() => {
    const store: Store = React.useContext(StoreContext);
    const api = new ApiService();
    return (
        <>
            <GlobalStyles/>
            <Router>
                <Navigation />

                <Route path={"/"}
                       render={() => <h2>Кликните на "Пользователи" в меню с лева.</h2>}
                       exact
                />

                <Route path={"/users/"} exact render={({ match, history }) => {
                    store.getUsers();
                    return <Board pageID = {match.params.id}
                                  history = {history}/>
                }} />

                <Route path={"/users/:id/posts"} render={({ match, history }) => {
                    store.setUsersPosts(match.params.id)
                    return <PostsPage history={ history }/>
                }}/>

                <Route path={"/posts/:id/"} render={({ match }) => {
                    return <Post postID = {match.params.id}
                                 getPost = {api.getPost}
                                 getComments = {api.getComments}/>
                }}/>
            </Router>
        </>
    )
})

export default App;