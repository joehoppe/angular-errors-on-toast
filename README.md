# angular-errors-on-toast
Ever forget to open the console window while developing JavaScript? I know it's a cardinal sin, but once and a while I forget. I'm human. 

I thought, can I use window.onerror to let me know that there are JavaScript runtime errors, in case I forget to open the console? 

I could use an alert() box, but those are obtrusive and annoying. 

Then I then thought of [Toaster](https://github.com/CodeSeven/toastr). It's a great library that flashes a message in a preconfigured corner of the window. The message briefly appears before going away.

<strong>Angular-Errors-On-Toast</strong> is my Angular module solution.  

<h2>Audience</h2>
Will my end users see these messages? No. It's configured to  display these errors only when the domain is localhost. I'll make this configurable in the future. You can modify the source code in the meantime.

<h2>How to get it</h2>
<ol>
  <li>bower install angular-errors-on-toast#0.5.2</li>
  <li>Change exceptionHandler.js</li>
</ol>

<h2>How to set it up</h2>
Replace "app" with the name of your AngularJS application. If you have more than one, duplicate the code multiple times.
I.e.:
```
  angular.module("app1").factory("$exceptionHandler", function ($injector) {
    ...
  });
  angular.module("app2").factory("$exceptionHandler", function ($injector) {
    ...
  });
```

<h3>Want the app to work for a URL other than localhost?</h3>

In errorsOnToast.js, change the array of allowedURLs to have the correct URL(s). I.e.:

```
var allowedUrls = ["localhost", "example.com"];
```

<h3>Requires</h3>
<ol>
  <li>Angular 1.3</li>
  <li>angular-toastr 0.5.2</li>
</ol>

<h2>What does it look like?</h2>
This briefly flashes in the corner of the window before going away. 
![alt tag](https://raw.githubusercontent.com/joehoppe/angular-errors-on-toast/master/readme/error.PNG)


<h2>License</h2>
MIT

I can do a lot more with this. Please let me know if you are interested.
