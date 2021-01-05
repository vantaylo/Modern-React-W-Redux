import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Alex" date="yesterday" comment="Nice Blog Post!" profilePic="https://source.unsplash.com/random" />
            <CommentDetail author="Jane" date="6 hours ago" comment="Cool!" profilePic="https://source.unsplash.com/random"/>
            <CommentDetail author="Matt" date="1 hour ago" comment="Interesting!" profilePic="https://source.unsplash.com/random"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))