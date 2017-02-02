[![npm version](https://badge.fury.io/js/angular-mn-date.svg)](https://badge.fury.io/js/angular-mn-date)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-date.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-date)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# angular-mn-date

An angular directive to [mn-date](https://github.com/minimalist-components/angular-mn-date)

See the [demo](https://minimalist-components.github.io/mn-date)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-date/master/preview.gif)](https://minimalist-components.github.io/angular-mn-date/)

### Install

```sh
npm install --save angular-mn-date
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-select/tree/master/dist) with your preferred tool.

### Usage

```js
// add dependency in you module
angular.module('app', [
  'mn-date'
])
```

And then, in your html, you can use the tag:

```html
<mn-date placeholder="Date" ng-model='myDate'></mn-date>
```


For more details check [mn-date docs](https://github.com/minimalist-components/mn-date).

