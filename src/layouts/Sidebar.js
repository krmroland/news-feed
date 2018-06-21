import React, { Component, createElement } from "react";
import IconNews from "../icons/IconNews";
import IconCurrencyDollar from "../icons/IconCurrencyDollar";
import IconHome from "../icons/IconHome";
import IconMusic from "../icons/IconMusic";
import IconTrophy from "../icons/IconTrophy";
import IconScreen from "../icons/IconScreen";
import IconScienceDna from "../icons/IconScienceDna";
import IconIsuranceCard from "../icons/IconIsuranceCard";
export default class Sidebar extends Component {
    links() {
        return [
            { name: "Headlines", icon: IconHome },
            { name: "Trending", icon: IconHome },
            { name: "All", icon: IconHome },
            { name: "Business", icon: IconCurrencyDollar },
            { name: "Entertainment", icon: IconMusic },
            { name: "General", icon: IconNews },
            { name: "Health", icon: IconIsuranceCard },
            { name: "Science", icon: IconScienceDna },
            { name: "Sports", icon: IconTrophy },
            { name: "Technology", icon: IconScreen }
        ];
    }
    generateLinks() {
        return this.links().map(link => (
            <li key={link.name} className={this.linkClass(link)}>
                <a href="" className="d-flex aic ">
                    <i className="sidebar-link-icon">
                        {createElement(link.icon)}
                    </i>
                    <span className="link-text"> {link.name}</span>
                </a>
            </li>
        ));
    }
    linkClass(link) {
        return this.isActive(link) ? "sidebar-link is-active" : "sidebar-link";
    }
    isActive(link) {
        return link.name === "All";
    }
    render() {
        return (
            <aside className="sidebar column-2">
                <div className="sidebar-links">
                    <h4 className="sidebar-category">Categories</h4>
                    <ul>{this.generateLinks()}</ul>
                </div>
            </aside>
        );
    }
}
