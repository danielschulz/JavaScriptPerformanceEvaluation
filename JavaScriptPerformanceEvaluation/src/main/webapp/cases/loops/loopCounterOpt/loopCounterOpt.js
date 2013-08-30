
var TIMES_TO_RUN_EACH = 20000;

function runCase() {
    var i = 0;
    while (i++ < TIMES_TO_RUN_EACH) {
        namespace.intensiveFn();
    }
}


function runImprovement() {
    var i = TIMES_TO_RUN_EACH;
    while (i--) {
        namespace.intensiveFn();
    }
}
