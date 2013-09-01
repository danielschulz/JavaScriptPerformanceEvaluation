
var SITE_TO_SCAN = "AboutW3C.htm";
var ELEMENT_QUERY_STRING = "#complexDom li";

function initRuns() {
    if (-1 !== window.location.protocol.indexOf("file")) {
        var msg = "XHR requests from file protocol are not meant to succeed. Therefore please consult " +
            "the official specification http://www.w3.org/TR/cors for further information. \n\nYou may try " +
            "running this site on a local server. An easy solution will be to invoke " +
            "\n'python -m SimpleHTTPServer 8000'\n in the /webapp directory (if you have python installed).\n\n" +
            "Otherwise it would be beneficial to try any webserver of your choice, node js, vert.x or " +
            "any means changing your protocol to a web based one: http/https/etc." +
            "On your webserver the location is \nhttp://localhost:8000/cases/DOM/scan/scanningComplexDom.html";

        alert(msg);
        console.log(msg);
    }
}

function runCase() {
    var res = [];
    var elementQuery = $(ELEMENT_QUERY_STRING);

    for (var i = 0; i < elementQuery.length; i++) {
        res = res.concat(elementQuery[i]);
    }
}

function runImprovement() {
    var res = [];
    var elementQuery = $(ELEMENT_QUERY_STRING);
    var len = elementQuery.length;

    for (var i = 0; i < len; i++) {
        res = res.concat(elementQuery[i]);
    }
}

function DomScanningController($scope, $routeParams) {
    $scope.resourceId = $routeParams.resourceId;
}

var module = angular.module('domScanning', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', { templateUrl: SITE_TO_SCAN, controller: 'DomScanningController'}).
            otherwise({redirectTo: '/'});
    }]);
