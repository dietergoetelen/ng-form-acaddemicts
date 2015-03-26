(function () {
    'use strict';


    angular.module('acaddemict.form')
        .directive('adFormControl', adForm);

    adForm.$inject = ['$compile'];
    function adForm($compile) {
        var vm = {};

        vm.restrict = "E";
        vm.templateUrl = "app/adForm/ad-form-control.tmpl.html";
        vm.scope = {
            text: '@',
            name: '@',
            model: '=',
            attrs: '='
        };
        vm.link = link;
        vm.controller = controller;
        vm.require = "?^form";

        return vm;

        function controller() {

        }

        function link(scope, element, attrs, form) {
            scope.form = form;

            var $element = angular.element(element.find('input')[0]);
            if (angular.isObject(scope.attrs)) {

                angular.forEach(scope.attrs, function (val, key) {
                    $element.attr(key, val);
                });

                $compile(element.contents())(scope);
            }
        }
    }

}());