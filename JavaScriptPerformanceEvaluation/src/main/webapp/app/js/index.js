

var namespace = new Namespace('de.novensa.web.performance.ui.javascript.JavaScriptPerformanceEvaluation', {

        static: {
            html: {
                title: {
                    prefix: "JavaScript Performance Evaluation",
                    conjunction: " // ",

                    getTitle: function() {
                        var name = Object.keys(namespace.static.performance.siteNamesToMissions[SITE_NAMES_INDEX])[0];
                        return this.prefix + (!!name ? (this.conjunction + name) : namespace.static.emptyString);
                    }
                }
            },

            performance: {
                siteNamesToMissions: [
                    // 0
                    { "Welcome": "to JavaScript Performance Evaluation suite" },
                    // 1
                    { "Scope chains": "Measuring the impact of access times in scope chains" }
                ]
            },

            emptyString: ""
        },

        backLink: function() {
            return window.history.back();
        },

        startup: function() {
            document.title = this.static.html.title.getTitle();

            var siteName = $('#siteName');
            var siteMission = $('#siteMission');

            var humanReadableName = Object.keys(namespace.static.performance.siteNamesToMissions[SITE_NAMES_INDEX])[0];

            if (!!siteName && !!siteName["length"] && 1 === siteName.length) {
                siteName[0].innerHTML = humanReadableName;
            }

            if (!!siteMission && !!siteMission["length"] && 1 === siteMission.length) {
                siteMission[0].innerHTML = this.static.performance.siteNamesToMissions[SITE_NAMES_INDEX][humanReadableName];
            }
        }

});


// constants
var SITE_NAMES_INDEX = SITE_NAMES_INDEX || 0;


// default startup routine
$(window).load = window.namespace.startup();
