# angular-errors-on-toast
Angular module that displays JavaScript window.onerror errors (runtime erros) to the end user using toastr. Only displays the message if the URL is localhost, so that it doesn't impact your QA or production users.


How to use it

bower install angular-toastr#0.5.2

Download this package (I'll put it on bower shortly)


Change exceptionHandler.js

Replace "app" with the name of your AngularJS application. If you have more than one, duplicate the code multiple times.

I.e.:

  angular.module("app1").factory("$exceptionHandler", function ($injector) {

    ...

  });

  angular.module("app2").factory("$exceptionHandler", function ($injector) {

    ...

  });


Want the app to work for a URL other than localhost?

In errorsOnToast.js, change the array of allowedURLs to have the correct URL(s). I.e.:

  var allowedUrls = ["localhost", "example.com"];


I can do a lot more with this. Please let me know if you are interested.


Requires:

Angular 1.3

angular-toastr 0.5.2


What does it look like?

What's it look like?

![alt tag](https://raw.githubusercontent.com/joehoppe/angular-errors-on-toast/master/readme/error.PNG)


License: MIT
