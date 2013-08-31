

var namespace = new Namespace('de.novensa.web.performance.ui.javascript.JavaScriptPerformanceEvaluation', {

    static: {
        html: {
            title: {
                prefix: "JavaScript Performance Evaluation",
                conjunction: " // ",

                getTitle: function() {

                    if ("number" !== typeof SITE_NAMES_INDEX) {
                        return;
                    }

                    var name = Object.keys(namespace.static.performance.siteNamesToMissions[SITE_NAMES_INDEX])[0];
                    return this.prefix + (!!name ? (this.conjunction + name) : namespace.static.emptyString);
                }
            },

            documentHrefMapping: {
                "/welcome.html": undefined,
                "/scopeChains.html": 1,
                "/loopCounterOpt.html": 2,
                "/nodeForthsAndBacks.html": 3
            }
        },

        performance: {
            siteNamesToMissions: [
                // 0
                { "Welcome": "to JavaScript Performance Evaluation suite" },
                // 1
                { "Scope chains": "Measuring the impact of access times in scope chains" },
                // 2
                { "Loop counter optimization": "Optimizing counters in loops" },
                // 3
                { "DOM node manipulation": "Adding and deleting nodes forth and back in DOM" }
            ],
            delayToRunCase: 500,
            measurements: []
        },

        emptyString: ""
    },

    profile: function(fnToProfile, thatRef) {

        var that = thatRef || window;
        var fn = fnToProfile || runCase;


        //noinspection JSUnresolvedVariable
        if ("function" === typeof initRuns) {
            //noinspection JSUnresolvedFunction
            initRuns();
        }


        var suite = new Benchmark.Suite;

        // add tests
        suite
            .add('case', function () {
                runCase();
            })
            .add('improvement', function () {
                runImprovement();
            })
            // add listeners
            .on('cycle', function (event) {
                console.log(String(event.target));
            })
            .on('complete', function () {
                console.log('Fastest is ' + this.filter('fastest').pluck('name'));
            })
            // run async
            .run({ 'async': true });

        // namespace.static.performance.measurements = namespace.static.performance.measurements.concat(stats);

        return undefined;
    },

    intensiveFn: function(arg) {
        var x = arg || 56486515761;
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

        if ("number" !== typeof SITE_NAMES_INDEX) {
            return;
        }


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
function getSiteNameIndex(locationsHref) {
    var location = locationsHref ||
        (!!this.location && !!this.location.pathname ? this.location.pathname : undefined);

    if (!location) {
        return;
    }

    var res = undefined;

    var findDocument = new RegExp(/^(\/?[A-Z]\:)?(\/[\w\d\.\%\-\_\!\#]+)*$/);
    var documentHref = location.match(findDocument);

    if ($.isArray(documentHref) && 3 === documentHref.length) {
        res = namespace.static.html.documentHrefMapping[documentHref[2]];
    }

    return res;
}

var SITE_NAMES_INDEX = getSiteNameIndex(window.location.pathname);


// default startup routine
$(window).load = window.namespace.startup();
