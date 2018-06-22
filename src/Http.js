class Http {
    constructor() {
        this.baseUrl = "https://newsapi.org/v2/";
        this.urlAppend = null;
        this.params = {};
        this.formatedParams = null;
        this.cache = {};

        this.articlesCallback = null;
        this.setParam("country", "us");
    }
    get completeUrl() {
        return this.baseUrl + this.urlAppend + this.formatedParams;
    }
    getHeadlines() {
        this.urlAppend = "top-headlines";
        return this.setArticles();
    }
    setArticles() {
        return this.fetch().then(({ articles }) =>
            this.articlesCallback(articles)
        );
    }

    getSources() {
        this.urlAppend = "sources";
        return this.fetch();
    }
    getArticles() {
        this.urlAppend = "everything";
        this.setParam("country", null);
        return this.setArticles();
    }
    setParam(name, value) {
        this.params[name] = value;
        const params = [];
        for (let param in this.params) {
            if (this.params.hasOwnProperty(param) && this.params[param]) {
                const add = `${param}=${this.params[param]}`;
                const prefix = params.length === 0 ? "?" : "&";
                params.push(prefix + add);
            }
        }
        this.formatedParams = params.join("");
        return this;
    }
    byCountry(country) {
        return this.setParam("country", country);
    }
    byLanguage(language) {
        return this.setParam("lang", language);
    }
    byCategory(category) {
        return this.setParam("category", category);
    }
    bySource(source) {
        return this.setParam("sources", source);
    }
    byQuery(query) {
        return this.setParam("query", query);
    }
    setArticlesCallback(callback) {
        this.articlesCallback = callback;
        // lets feed it some data initially
        this.getHeadlines();
    }
    fetch() {
        const options = {
            method: "GET",
            headers: {
                Authorization: "Bearer 3167f0b33cbe42d98bfe46e24b138275"
            }
        };
        return fetch(this.completeUrl, options)
            .then(reponse => reponse.json())
            .catch(error => {
                console.log({ error });
            });
    }
}

//export the same instance on multiple imports
export default new Http();
