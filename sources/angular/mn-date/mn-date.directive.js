angular
  .module('mn-date')
  .directive('mnDate', MnDateDirective)

function MnDateDirective($compile, $parse) {
  return {
    restrict: 'E',
    link,
    require: 'ngModel',
  }

  function link(scope, element, attributes) {
    const dirtyInput = element[0].querySelector('input + input')
    if (dirtyInput) {
      element[0].removeChild(dirtyInput)
    }
    const input = element.find('input')
    element[0].value = $parse(attributes.ngModel)(scope)
    input.attr('ng-model', attributes.ngModel)
    $compile(input)(scope)
  }
}
