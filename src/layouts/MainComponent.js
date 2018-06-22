import React, { Component } from "react";
import Articles from "../components/Articles";

export default class MainComponent extends Component {
    render() {
        return (
            <main className="column-10 main">
                <Articles />
            </main>
        );
    }
}
