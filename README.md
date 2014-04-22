input-only-numbers
========================

AngularJS directive that replaces any other character except digits. Can be used on type type text, number, tel input fields. Number and tel input fields will open the corresponding keyboard on mobile devices. But on some devices, these keyboards still contains some characters like dots or commas, so this directive forbids the user inputting anything else than digits.

Dependencies
============
To use this directive in your projects, you must include its dependencies. Asumming you already have angular and jquery libraries included in your project, you're going to need the main directive file: InputOnlyNumbers.js

Usage
=====
Once you've checked that everything is in place, you can use this directive like so:

```html
<input type="text" ng-model="model" min="10" max="100" input-only-numbers />
```

or

```html
<input type="number" ng-model="model" min="10" max="100" input-only-numbers />
```

Demo
====
http://plnkr.co/edit/yEg30CGUbnADRougatM9?p=preview

http://embed.plnkr.co/yEg30CGUbnADRougatM9/preview

