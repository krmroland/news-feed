import React, { Component } from "react";
import Article from "./Article";
import Http from "../Http";
export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
        Http.setArticlesCallback(this.updateArticles.bind(this));
    }
    updateArticles(articles) {
        this.setState({ articles });
    }
    generateFeed() {
        return this.state.articles.map((article, index) => (
            <Article key={index} article={article} />
        ));
    }
    render() {
        return (
            <div>
                {this.state.articles.map((article, index) => (
                    <Article key={index} article={article} />
                ))}
            </div>
        );
    }
}
