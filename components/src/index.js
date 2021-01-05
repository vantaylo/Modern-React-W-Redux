import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";
import ApprovalCard from "./ApprovalCard"

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <div><h4>Are you sure you want to do this?</h4></div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" date="yesterday" comment="Nice Blog Post!" profilePic="https://source.unsplash.com/random" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane" date="6 hours ago" comment="Cool!" profilePic="https://source.unsplash.com/random"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Matt" date="1 hour ago" comment="Interesting!" profilePic="https://source.unsplash.com/random"/>
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))