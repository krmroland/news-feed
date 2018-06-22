import React, { Component } from "react";

export default class SourcesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    updateSourceId(id, e) {
        this.props.store.updateSourceId(id);
    }
    generateSources() {
        return this.props.sources.map(source => (
            <li key={source.id}>
                <input
                    type="checkbox"
                    onChange={this.updateSourceId.bind(this, source.id)}
                />
                <span> {source.name}</span>
            </li>
        ));
    }
    render() {
        return (
            <div className="sources column-4 px-2">
                <div className="container">
                    <h4 className="sources-title">
                        Sources <span>({this.props.sources.length})</span>
                    </h4>
                    <ul>{this.generateSources()}</ul>
                </div>
            </div>
        );
    }
}
