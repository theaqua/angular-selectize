Angular.js directive for [selectize.js](http://brianreavis.github.io/selectize.js/). New version based on @kbanman [work](https://github.com/kbanman/selectize-ng).

Installation
====
- Install from bower

        bower install --save ng-selectize

- Include styles

        <link rel="stylesheet" href="bower_components/selectize/dist/css/selectize.css"/>
        <link rel="stylesheet" href="bower_components/selectize/dist/css/selectize.bootstrap3.css"/>

- Include scripts

        <script src="bower_components/selectize/dist/js/standalone/selectize.min.js"></script>
        <script src="bower_components/ng-selectize/ng-selectize.min.js"></script>

Usage
====
Multiple select:

    <input type="text" selectize="config" options="suggestions" ng-model="selected">

Single value:

    <select selectize="config" options="suggestions" ng-model="selected"></select>

[Selectize.js](https://github.com/brianreavis/selectize.js/blob/master/docs/usage.md) documentation for `config`.
