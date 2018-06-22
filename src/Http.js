class Http {
    constructor() {
        this.baseUrl = "https://newsapi.org/v2/";
        this.urlAppend = null;
        this.params = {};
        this.formatedParams = null;
        this.cache = {};
        this.articlesCallback = null;
    }
    get completeUrl() {
        return this.baseUrl + this.urlAppend + this.formatedParams;
    }
    getHeadlines() {
        //reset sources if any
        this.setParam("sources", null);
        this.urlAppend = "top-headlines";

        return this.fetch();
    }

    getSources() {
        this.urlAppend = "sources";
        this.setParam("country", null);
        return this.fetch();
    }
    getArticles(urlAppend = "everything") {
        this.urlAppend = urlAppend;

        return this.fetch();
    }

    setParam(name, value) {
        this.params[name] = value;
        const params = [];
        for (let param in this.params) {
            if (this.params.hasOwnProperty(param) && this.params[param]) {
                const add = `${param}=${this.params[param]}`.trim();
                const prefix = params.length === 0 ? "?" : "&";
                params.push(prefix + add);
            }
        }
        this.formatedParams = params.join("");
        return this;
    }
    bySources(sources) {
        //country param not allowed on this uri
        this.setParam("country", null);
        return this.setParam("sources", sources.join(","));
    }
    byCountry(country) {
        return this.setParam("country", country);
    }
    byLanguage(language) {
        return this.setParam("language", language);
    }
    byCategory(category) {
        return this.setParam("category", category);
    }

    byQuery(query) {
        return this.setParam("query", query);
    }

    fetch() {
        const options = {
            method: "GET",
            headers: {
                Authorization: "Bearer 3167f0b33cbe42d98bfe46e24b138275"
            }
        };

        return fetch(this.completeUrl, options)
            .then(response => response.json())
            .catch(error => {
                console.log({ error });
            });
    }
}

export default Http;
