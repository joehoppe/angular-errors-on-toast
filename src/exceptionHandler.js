//version 0.1
"use strict";
//override the angular exception handler service. pop a toast to display error message
angular.module("app").factory("$exceptionHandler", function ($injector) {
    return function (exception) { //(exception, cause) {
        var $log = $injector.get("$log");
        $log.error.apply($log, arguments);

        var runtimeErrorFactory = $injector.get("runtimeErrorFactory");
        runtimeErrorFactory.error(exception.message);
    };
});