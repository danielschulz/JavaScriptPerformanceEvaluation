

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
                { "Scope chains": "Measuring the impact of access times in scope chains" },
                // 2
                { "Loop counter optimization": "Optimizing counters in loops" }
            ],
            delayToRunCase: 500,
            measurements: []
        },

        emptyString: ""
    },

    profile: function(fnToProfile, thatRef, timesRef) {

        var that = thatRef || window;
        var fn = fnToProfile || runCase;
        var times = timesRef || TIMES_TO_RUN_EACH;

        if ("number" !== typeof times) {
            return undefined;
        }

        var start = (new Date()).getTime();

        var i = 0;
        while (i++ < times) {
            fn.call(that);
        }

        var end = (new Date()).getTime();
        var diff = (end - start);

        namespace.static.performance.measurements = namespace.static.performance.measurements.concat(diff);

        if (namespace.static.performance.measurements.length < MEASUREMENTS_TARGET_COUNT && "function" === typeof runCase) {
            setTimeout(function () {
                namespace.profile();
            }, namespace.static.performance.delayToRunCase);
        }

        console.log(diff);

        return diff;
    },

    intensiveFn: function() {
        var x = 56486515761;
        var fn = function(x) {
            while(Math.abs(x) > 1) {
                x = Math.log(Math.pow(Math.pow(Math.abs(x), Math.sin(x)), 11));
            }
        };
        return fn.apply(null, [x]);
    },


    backLink: function() {
        return window.history.back();
    },

    forwardLink: function() {
        return window.history.forward();
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

        if ("function" === typeof runCase) {
            setTimeout(function () {
                namespace.profile();
            }, namespace.static.performance.delayToRunCase);
        }
    }

});


// constants
var SITE_NAMES_INDEX = SITE_NAMES_INDEX || 0;


// default startup routine
$(window).load = window.namespace.startup();
