
var TEST_STRING = "The quick brown fox jumps over the lazy dog.";
var SEARCH_ITEM_1 = "quick";
var SEARCH_ITEM_2 = "fox";
var SEARCH_ITEM_3 = "lazy dog";
var SEARCH_ITEM_4 = "unknown";
var SEARCH_ITEM_5 = "will not be found";

var REG_EXP = new RegExp(/quick|fox|lazy\sdog/);


function runCase() {
    
    if (-1 !== TEST_STRING.indexOf(SEARCH_ITEM_1)) {
        namespace.intensiveFn();
    }
    if (-1 !== TEST_STRING.indexOf(SEARCH_ITEM_2)) {
        namespace.intensiveFn();
    }
    if (-1 !== TEST_STRING.indexOf(SEARCH_ITEM_3)) {
        namespace.intensiveFn();
    }
    if (-1 !== TEST_STRING.indexOf(SEARCH_ITEM_4)) {
        namespace.intensiveFn();
    }
    if (-1 !== TEST_STRING.indexOf(SEARCH_ITEM_5)) {
        namespace.intensiveFn();
    }
}


function runImprovement() {

    if (REG_EXP.test(SEARCH_ITEM_1)) {
        namespace.intensiveFn();
    }
    if (REG_EXP.test(SEARCH_ITEM_2)) {
        namespace.intensiveFn();
    }
    if (REG_EXP.test(SEARCH_ITEM_3)) {
        namespace.intensiveFn();
    }
    if (REG_EXP.test(SEARCH_ITEM_4)) {
        namespace.intensiveFn();
    }
    if (REG_EXP.test(SEARCH_ITEM_5)) {
        namespace.intensiveFn();
    }
}
