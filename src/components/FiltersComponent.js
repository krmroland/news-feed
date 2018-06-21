import React, { Component } from "react";
import SearchComponent from "./SearchComponent";
import Http from "../Http";

export default class FiltersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { sources: {}, languages: [], countries: [] };
        this.setFilters();
    }
    sourceOptions() {
        return Object.keys(this.state.sources).map(key => {
            return (
                <option value={key} key={key}>
                    {this.state.sources[key]}
                </option>
            );
        });
    }
    selectSource(e) {
        Http.bySource(e.target.value).getArticles();
    }
    setFilters() {
        Http.getSources().then(({ sources }) => {
            const localSources = {};
            for (let source of sources) {
                localSources[source.id] = source.name;
            }
            this.setState(state => {
                state["sources"] = localSources;
                return sources;
            });
        });
    }
    render() {
        return (
            <div className="column-10 d-flex filters">
                <div className="column-2 pl-1">
                    <select className="control" onChange={this.selectSource}>
                        <option value="">Select Source</option>
                        {this.sourceOptions()}
                    </select>
                </div>

                <SearchComponent />
                <div className="column-4 pr-1 d-flex">
                    <select className="control">
                        <option value="">Country</option>
                    </select>
                    <select className="control">
                        <option value="">Language</option>
                    </select>
                </div>
            </div>
        );
    }
}
