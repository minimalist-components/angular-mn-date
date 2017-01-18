[![Bower version](https://badge.fury.io/bo/angular-mn-date.svg)](https://badge.fury.io/bo/angular-mn-date)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-date.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-date)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   


# angular-mn-date

An angular directive to [mn-date](https://github.com/minimalist-components/mn-date)

<!-- See the [demo](https://minimalist-components.github.io/mn-date) -->

<!-- [![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-date/master/sources/example/mn-date.gif)](https://minimalist-components.github.io/mn-date/) -->

### install

With bower

```sh
bower install --save angular-mn-date
```

Or just download the main files, located in [dist/](https://github.com/minimalist-components/angular-mn-date/tree/master/dist)

### usage

```js
// add dependency in you module
angular.module('app', [
  'mn-date'
]);
```

And then, in your html, you can use the tag:

```html
<mn-date placeholder="Date" ng-model='myDate'></mn-date>
```


For more details check [mn-date docs](https://github.com/minimalist-components/mn-date).

