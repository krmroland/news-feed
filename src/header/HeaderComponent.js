import React, { Component } from "react";
import HeaderBrand from "./HeaderBrand";
import FiltersComponent from "./FiltersComponent";
import MobileSearch from "./MobileSearch";
export default class HeaderComponent extends Component {
    render() {
        return (
            <header className="main-header columns aic jcsb">
                <HeaderBrand />
                <FiltersComponent {...this.props} />
                <MobileSearch />
            </header>
        );
    }
}
