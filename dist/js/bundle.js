(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../typings/index.d.ts" />
var dz_npm_plugin_1 = require("./modules/dz-npm-plugin");
dz_npm_plugin_1.DzNpmPlugin.Hello("Daniel!", "#target");

},{"./modules/dz-npm-plugin":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DzNpmPlugin = (function () {
    function DzNpmPlugin() {
        console.log("[" + typeof DzNpmPlugin + "]: Constructor");
    }
    return DzNpmPlugin;
}());
DzNpmPlugin.Hello = function (name, target) {
    $(target).html("Hello " + name);
    console.log("[DzNpmPlugin]: Hello ", name);
};
exports.DzNpmPlugin = DzNpmPlugin;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi50cyIsInNyYy9qcy9tb2R1bGVzL2R6LW5wbS1wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FDLGlEQUFpRDtBQUNsRCx5REFBc0Q7QUFFdEQsMkJBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDLFNBQVMsQ0FBQyxDQUFDOzs7OztBQ0h2QztJQUNJO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBTUwsa0JBQUM7QUFBRCxDQVRBLEFBU0M7QUFKZ0IsaUJBQUssR0FBSSxVQUFDLElBQVksRUFBRSxNQUFjO0lBQy9DLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBUk8sa0NBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwi77u/Ly8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbmltcG9ydCB7IER6TnBtUGx1Z2luIH0gZnJvbSBcIi4vbW9kdWxlcy9kei1ucG0tcGx1Z2luXCI7XHJcblxyXG5Eek5wbVBsdWdpbi5IZWxsbyhcIkRhbmllbCFcIixcIiN0YXJnZXRcIik7IiwiZXhwb3J0IGNsYXNzIER6TnBtUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIltcIiArIHR5cGVvZiBEek5wbVBsdWdpbiArIFwiXTogQ29uc3RydWN0b3JcIik7XG4gICAgfVxuICAgIFxuICAgcHVibGljIHN0YXRpYyBIZWxsbyAgPSAobmFtZTogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZykgPT4ge1xuICAgICAgICAkKHRhcmdldCkuaHRtbChcIkhlbGxvIFwiICsgbmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0R6TnBtUGx1Z2luXTogSGVsbG8gXCIsIG5hbWUpO1xuICAgIH07XG59Il19
