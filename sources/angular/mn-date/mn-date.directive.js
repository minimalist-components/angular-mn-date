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
    const validDate = attributeValue && Date.parse(attributeValue) && date
    const value = validDate
      ? date.toISOString().slice(0, 10)
      : undefined
    element[0].value = value
    input.attr('ng-model', attributes.ngModel)
    const viewValue = validDate
      ? new Date(value)
      : undefined
    ngModel.$setViewValue(viewValue)
    $compile(input)(scope)
  }
}
