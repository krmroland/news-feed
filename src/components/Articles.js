import React, { Component } from "react";
import Article from "./Article";

export default class Articles extends Component {
    generateFeed() {
        return this.props.articles.map((article, index) => (
            <Article key={index} article={article} />
        ));
    }
    render() {
        return <div className="column-8 px-2">{this.generateFeed()}</div>;
    }
}
