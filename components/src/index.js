import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Alex"/>
            <CommentDetail author="Jane"/>
            <CommentDetail author="Sam"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))