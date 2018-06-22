import React, { Component, Fragment } from "react";
import Articles from "./components/Articles";
import SourcesComponent from "./filters/SourcesComponent";
import HeaderComponent from "./header/HeaderComponent";
import Sidebar from "./layouts/Sidebar";

import Store from "./Store";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            sources: [],
            countries: [],
            languages: [],
            categories: []
        };
        this.store = new Store(this);
    }

    componentDidMount() {
        this.store.fetchSources().fetchHeadlines();
    }

    render() {
        return (
            <Fragment>
                <HeaderComponent {...this.state} store={this.store} />
                <div className="app columns">
                    <Sidebar
                        store={this.store}
                        categories={this.state.categories}
                    />
                    <main className="column-10 main columns">
                        <Articles articles={this.state.articles} />
                        <SourcesComponent
                            store={this.store}
                            sources={this.state.sources}
                        />
                    </main>
                </div>
            </Fragment>
        );
    }
}

export default App;
