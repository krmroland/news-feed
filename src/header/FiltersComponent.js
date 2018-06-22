import React, { Component } from "react";
import SearchComponent from "./SearchComponent";
export default class FiltersComponent extends Component {
    languageOptions() {
        return this.props.languages.map(lang =>
            this.makeOption(lang.code, lang.name)
        );
    }
    countryOptions() {
        return this.props.countries.map(country =>
            this.makeOption(country.code, country.name)
        );
    }

    makeOption(key, value) {
        return (
            <option value={key} key={key}>
                {value}
            </option>
        );
    }

    selectCountry(e) {
        this.props.store.updateCountry(e.target.value);
    }
    selectLanguage(e) {
        this.props.store.updateLanguage(e.target.value);
    }

    render() {
        return (
            <div className="column-10 columns">
                <div className="column-2 pl-1">
                    <select
                        className="control"
                        onChange={this.selectCountry.bind(this)}
                    >
                        <option value="">--Country--</option>
                        {this.countryOptions()}
                    </select>
                </div>
                <SearchComponent />

                <div className="column-2 pr-1">
                    <select
                        className="control"
                        onChange={this.selectLanguage.bind(this)}
                    >
                        <option value="">--Language--</option>
                        {this.languageOptions()}
                    </select>
                </div>
            </div>
        );
    }
}
