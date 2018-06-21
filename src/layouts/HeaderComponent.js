import React, { Component } from "react";
import IconNews from "../icons/IconNews";
import FiltersComponent from "../components/FiltersComponent";
export default class HeaderComponent extends Component {
    render() {
        return (
            <header className="main-header d-flex aic">
                <a href="" className="header-brand d-flex aic column-2">
                    <i className="header-icon">
                        <IconNews />
                    </i>
                    NF
                </a>
                <FiltersComponent />
            </header>
        );
    }
}
