//version 0.1
(function () {
    "use strict";
    angular.module("errors-on-toast", [
        // Angular modules         
        // Custom modules 
        // 3rd Party Modules
        "toastr"
    ]);
})();
(function () {
    "use strict";
    angular
        .module("errors-on-toast")
        .factory("runtimeErrorFactory", runtimeErrorFactory);

    runtimeErrorFactory.$inject = ["$location", "toastr"];

    function runtimeErrorFactory($location, toastr) {
        var service = {
            error: error
        };

        var host = $location.host();
        var allowedUrls = ["localhost"];

        function isUrlAllowed() {
            return allowedUrls.length > 0
                && allowedUrls.indexOf(host) !== -1;
        }

        function error(message) {
            if (isUrlAllowed(host) === true) {
                toastr.error(message, "Error");
            }
        }

        return service;
    }
})();