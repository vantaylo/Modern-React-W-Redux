import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src='https://source.unsplash.com/random' />
                </a>
                <div className="content">
                    <a href="/" className="author">Sam1</a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice Blog Post!</div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src='https://source.unsplash.com/random' />
                </a>
                <div className="content">
                    <a href="/" className="author">Sam2</a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice Blog Post!</div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src='https://source.unsplash.com/random' />
                </a>
                <div className="content">
                    <a href="/" className="author">Sam3</a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice Blog Post!</div>
                </div>
            </div>

        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'))