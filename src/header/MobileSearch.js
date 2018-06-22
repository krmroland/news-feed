import React, { Component } from "react";
import IconSearch from "../icons/IconSearch";
export default class MobileSearch extends Component {
    render() {
        return (
            <div className="mobile-search">
                <button className="btn btn-primary">
                    <IconSearch />
                </button>
            </div>
        );
    }
}
