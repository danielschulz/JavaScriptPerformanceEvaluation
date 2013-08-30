
var SCOPE_BUILDING_DEPTH = 24;
var OBJ_REFS = [];
var CASE_OBJ = undefined;
var IMPROVEMENTS_OBJ = undefined;


var obj0 = {
    undef: undefined,
    noRef: null,
    noNumber: NaN,
    empty: {},

    a0: 0,
    b0: "obj0",

    getA: function() {
        return this.a0;
    },
    getB: function() {
        return this.b0;
    }
};


function initRuns() {
    var i = 1;
    var curObj = this.obj0;
    var r;

    while (i <= SCOPE_BUILDING_DEPTH) {

        var keys = Object.keys(curObj);
        var h;
        curObj['obj' + i] = {};
        r = curObj['obj' + i];

        for (var k in keys) {
            h = keys[k];

            if (("a" + (i - 1)) === h) {
                r["a" + i] = i;
            } else if (("b" + (i - 1)) === h) {
                r["b" + i] = ("obj" + i);
            } else {
                r[h] = curObj[h];
            }
        }

        curObj['obj' + i].__proto__ = curObj;
        curObj = curObj['obj' + i];

        i++;

        OBJ_REFS = OBJ_REFS.concat(curObj);
    }

    CASE_OBJ = curObj;
    IMPROVEMENTS_OBJ = this.obj0;
}

function runCase() {
    namespace.intensiveFn(CASE_OBJ.getA());
    return CASE_OBJ.getB();
}

function runImprovement() {
    namespace.intensiveFn(IMPROVEMENTS_OBJ.getA());
    return IMPROVEMENTS_OBJ.getB();
}
