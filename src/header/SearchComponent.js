import React, { Component } from "react";
import IconSearch from "../icons/IconSearch";

export default class SearchComponent extends Component {
    render() {
        return (
            <div className="column-8 px-2 d-flex">
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
