angular
  .module('mn-date')
  .directive('mnDate', MnDateDirective)

function MnDateDirective($compile, $parse) {
  return {
    restrict: 'E',
    link,
    require: 'ngModel',
  }

  function link(scope, element, attributes, ngModel) {
    const dirtyInput = element[0].querySelector('input + input')
    if (dirtyInput) {
      element[0].removeChild(dirtyInput)
    }

    const input = element.find('input')
    const attributeValue = $parse(attributes.ngModel)(scope)
    const date = new Date(Date.parse(attributeValue))
    const value = Date.parse(attributeValue) && date
      ? date.toISOString().slice(0, 10)
      : null
    element[0].value = value
    input.attr('ng-model', attributes.ngModel)

    ngModel.$setViewValue(new Date(value))
    $compile(input)(scope)
  }
}
