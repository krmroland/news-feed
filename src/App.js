import React, { PureComponent, Fragment } from "react";
import MainComponent from "./layouts/MainComponent";
import HeaderComponent from "./layouts/HeaderComponent";
import Sidebar from "./layouts/Sidebar";

class App extends PureComponent {
    render() {
        return (
            <Fragment>
                <HeaderComponent />
                <div className="app columns">
                    <Sidebar />
                    <MainComponent />
                </div>
            </Fragment>
        );
    }
}

export default App;
