import React, { Component } from "react";

export default class Article extends Component {
    render() {
        return (
            <article className="article">
                <h2 className="article-title">{this.props.article.title}</h2>
                <div className="columns">
                    <div className="article-image column-4">
                        <img src={this.props.article.urlToImage} alt="" />
                    </div>
                    <div className="column-8 pl-1">
                        <p className="article-body">
                            {this.props.article.description}
                        </p>
                        <div className="article-links d-flex jce aie p-2">
                            <a
                                href={this.props.article.url}
                                className="text-primary"
                                target="_blank"
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
