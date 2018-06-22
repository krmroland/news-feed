import React, { Component } from "react";

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <article className="article">
                <h2 className="article-title">{this.state.article.title}</h2>
                <div className="columns">
                    <div className="article-image column-3">
                        <img src={this.state.article.urlToImage} alt="" />
                    </div>
                    <div className="column-9 pl-1">
                        <p className="article-body">
                            {this.state.article.description}
                        </p>
                        <div className="article-links d-flex jce aie p-2">
                            <a
                                href={this.state.article.url}
                                className="text-primary"
                            >
                                read more
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}
