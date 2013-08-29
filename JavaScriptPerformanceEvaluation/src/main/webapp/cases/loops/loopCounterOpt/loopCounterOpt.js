
var SITE_NAMES_INDEX = SITE_NAMES_INDEX || 2;
var TIMES_TO_RUN_EACH = 200000;

function runCase() {
    var times = 0;
    var i = 0;
    while (i++ < TIMES_TO_RUN_EACH) {
        //namespace.intensiveFn();
        times++;
    }
}


function runImprovement() {
    var times = 0;
    var i = TIMES_TO_RUN_EACH;
    while (i--) {
        //namespace.intensiveFn();
        times++;
    }
}

