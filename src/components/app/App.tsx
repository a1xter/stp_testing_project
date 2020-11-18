import React from "react";
import Navigation from "../navigation/Navigation";
import GlobalStyles from "../../configuration/global-styles"
import Board from "../board/Board";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostsPage from "../posts/PostsPage";
import Post from "../posts/Post";

const App: React.FC = () => {
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
                    return <Board pageID = {match.params.id}
                                  history = {history}/>
                }} />
                <Route path={"/users/:id/posts"} render={({ match, history }) => {
                    return <PostsPage history={ history }
                                      userID = {match.params.id}/>
                }}/>
                <Route path={"/posts/:id/"} render={({ match }) => {
                    return <Post postID = {match.params.id}/>
                }}/>
            </Router>
        </>
    )
}

export default App;