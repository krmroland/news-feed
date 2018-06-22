import React, { Component } from "react";
import IconSearch from "../icons/IconSearch";

export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    searchQuery(e) {
        if (this.isValid()) {
            this.props.store.updateQuery(this.state.value);
        }
    }
    setValue(e) {
        this.setState({ value: e.target.value });
    }
    isValid() {
        return String(this.state.value).length >= 3;
    }
    render() {
        return (
            <div className="px-2 d-flex search-box">
                <input
                    type="text"
                    className="control"
                    placeholder="Search ..."
                    onChange={this.setValue.bind(this)}
                />
                <button
                    className="btn btn-dark btn-icon"
                    disabled={!this.isValid()}
                    onClick={this.searchQuery.bind(this)}
                >
                    <i>
                        <IconSearch />
                    </i>
                </button>
            </div>
        );
    }
}
