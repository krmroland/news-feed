import React, { Component } from "react";
import HeaderBrand from "./HeaderBrand";
import FiltersComponent from "./FiltersComponent";

export default class HeaderComponent extends Component {
    render() {
        return (
            <header className="main-header d-flex aic jcsb">
                <HeaderBrand />
                <FiltersComponent {...this.props} />
            </header>
        );
    }
}
