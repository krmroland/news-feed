import React, { Component } from "react";
import IconNews from "../icons/IconNews";
export default class HeaderBrand extends Component {
    render() {
        return (
            <a href="" className="header-brand d-flex aic column-2">
                <i className="header-icon">
                    <IconNews />
                </i>
                NF
            </a>
        );
    }
}
