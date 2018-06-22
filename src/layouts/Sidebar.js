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
    constructor(props) {
        super(props);
        this.state = {
            activeCategory: "Headlines"
        };
        this.categories = {
            business: { name: "Business", icon: IconCurrencyDollar },
            entertainment: { name: "Entertainment", icon: IconMusic },
            general: { name: "General", icon: IconNews },
            health: { name: "Health", icon: IconIsuranceCard },
            science: { name: "Science", icon: IconScienceDna },
            sports: { name: "Sports", icon: IconTrophy },
            technology: { name: "Technology", icon: IconScreen }
        };
    }
    links() {
        const general = [{ name: "Headlines", icon: IconHome }];
        this.props.categories.forEach(category =>
            general.push(this.categories[category])
        );
        return general;
    }
    activateLink(link, e) {
        e.preventDefault();
        this.props.store.updateCategory(link.name.toLowerCase());
        this.setState({ activeCategory: link.name });
    }

    generateLinks() {
        return this.links().map(link => (
            <li key={link.name} className={this.linkClass(link)}>
                <a
                    href=""
                    className="d-flex aic "
                    onClick={this.activateLink.bind(this, link)}
                >
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
        return link.name === this.state.activeCategory;
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
