import Http from "./Http";

class Store {
    constructor(app) {
        this.app = app;
        this.updateArticles = this.updateArticles.bind(this);
        this.Http = new Http();

        this.meta = require("./meta.json");
        this.sourceIds = [];
        this.allSources = [];
        this.sources = [];
        this.filters = {
            country: "us",
            language: "en",
            category: ""
        };
        this.setHttpHooks();
    }

    fetchHeadlines() {
        const { language, country } = this.filters;
        this.Http.byLanguage(language)
            .byCountry(country)
            .getHeadlines()
            .then(this.updateArticles)
            .catch(error => console.log(error));
    }
    updateArticles({ articles }) {
        this.updateState("articles", articles);
    }
    fetchSources() {
        this.Http.getSources().then(({ sources }) => {
            this.allSources = sources;
            this.sources = sources;
            const categories = new Set();
            const formatedSources = [];

            Object.values(sources).forEach(({ name, category, id }) => {
                categories.add(category);
                if (id) {
                    formatedSources.push({ name, id });
                }
            });

            this.app.setState(state => {
                state["countries"] = this.meta["countries"];
                state["categories"] = categories;
                state["sources"] = formatedSources;
                state["languages"] = this.meta["languages"];
                return state;
            });
        });
        return this;
    }
    extractFrom(data, attributes) {
        const extract = {};

        attributes.forEach(attribute => (extract[attribute] = []));
        Object.values(data).forEach(datum => {
            attributes.forEach(attribute => {
                extract[attribute].push(datum[attribute]);
            });
        });

        return extract;
    }

    updateSourceId(id) {
        // console.log(id);
        const index = this.sourceIds.indexOf(id);
        index > -1 ? this.sourceIds.splice(index, 1) : this.sourceIds.push(id);
        return this.updateArticlesByFilters();
    }
    updateArticlesByFilters() {
        this.setArticles(
            this.Http.bySources(this.shuffledSourceIds()).byLanguage(
                this.filters.language
            )
        );
    }
    shuffledSourceIds() {
        const ids = this.sourceIds;
        const length = ids.length;
        //since only 20 sources can be allowed, pick 20 randomly
        if (length <= 20) {
            return this.sourceIds;
        }
        const results = [];
        while (true) {
            if (results.length === 20) {
                break;
            }
            const randomIndex = Math.floor(Math.random() * length - 1);
            if (!results.includes(ids[randomIndex])) {
                results.push(ids[randomIndex]);
            }
        }
        return results;
    }
    updateCategory(category) {
        if (category === "headlines") {
            this.filters["category"] = null;
            this.updateData();
            return this.fetchHeadlines();
        }
        this.filters["category"] = category;
        // update the filters
        this.updateData();

        return this.updateArticlesByFilters();
    }
    updateCountry(country) {
        this.filters["country"] = country;
        this.updateData();
        this.updateArticlesByFilters();
    }
    updateLanguage(language) {
        this.filters["language"] = language;
        //set the document lang for correct formating
        document.documentElement.setAttribute("lang", language || "en");

        this.updateData();

        return this.updateArticlesByFilters();
    }
    setArticles(promise) {
        return promise.getArticles().then(this.updateArticles);
    }
    updateData() {
        //filter the sources base on the filters we have
        this.filterSources();

        const sources = this.sources.map(({ id, name }) => ({ id, name }));

        this.sourceIds = this.sources.map(source => source.id);

        this.app.setState(state => {
            state["sources"] = sources;
            return state;
        });
    }
    filterSources() {
        this.sources = this.allSources.filter(source => {
            //filter by country, if the filter is not set, we return true
            return (
                this.filterSourceByAttribute(source, "language") ||
                this.filterSourceByAttribute(source, "category") ||
                this.filterSourceByAttribute(source, "country")
            );
        });
    }
    filterSourceByAttribute(source, attribute) {
        const filter = this.filters[attribute];
        return filter ? source[attribute] === filter : true;
    }
    filterLanguages() {
        const languages = new Set(this.sources.map(source => source.language));
        return this.meta.languages.filter(language =>
            languages.has(language.code)
        );
    }
    filterCountries() {
        const countries = new Set(this.sources.map(source => source.country));
        return this.meta.countries.filter(country =>
            countries.has(country.code)
        );
    }
    setHttpHooks() {
        this.Http.beforeRequest(() => this.updateState("isLoading", true));
        this.Http.afterRequest(() => this.updateState("isLoading", false));
    }
    updateState(key, value, callback) {
        //don't override state with undefined values
        if (value === undefined) {
            return;
        }
        return this.app.setState(state => {
            state[key] = value;
            return state;
        }, callback);
    }
}

export default Store;
