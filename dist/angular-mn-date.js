"use strict";function MnDateDirective($compile,$parse){function link(scope,element,attributes){var dirtyInput=element[0].querySelector("input + input");dirtyInput&&element[0].removeChild(dirtyInput);var input=element.find("input");element[0].value=$parse(attributes.ngModel)(scope),input.attr("ng-model",attributes.ngModel),$compile(input)(scope)}return{restrict:"E",link:link,require:"ngModel"}}angular.module("mn-date",[]),MnDateDirective.$inject=["$compile","$parse"],angular.module("mn-date").directive("mnDate",MnDateDirective);
//# sourceMappingURL=angular-mn-date.js.map
