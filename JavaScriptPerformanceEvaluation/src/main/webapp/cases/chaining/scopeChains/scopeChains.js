
var SCOPE_BUILDING_DEPTH = 4;

var obj0 = {
    undef: undefined,
    noRef: null,
    noNumber: NaN,
    empty: {},

    a: 0,
    b: "obj0",

    getA: function() {
        return this.a;
    },
    getB: function() {
        return this.b;
    },

    obj1: {
        undef: undefined,
        noRef: null,
        noNumber: NaN,
        empty: {},

        a: 1,
        b: "obj1",

        getA: function() {
            return this.a;
        },
        getB: function() {
            return this.b;
        }
    }
};

function buildNestedObjectsToDepth(obj1, depth) {

    var d = depth || SCOPE_BUILDING_DEPTH;
    var o = obj1;


}

