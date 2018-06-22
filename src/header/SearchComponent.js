import React, { Component } from "react";
import IconSearch from "../icons/IconSearch";

export default class SearchComponent extends Component {
    render() {
        return (
            <div className="px-2 d-flex search-box">
                <input
                    type="text"
                    className="control"
                    placeholder="Search ..."
                />
                <button className="btn btn-dark btn-icon">
                    <i>
                        <IconSearch />
                    </i>
                </button>
            </div>
        );
    }
}
