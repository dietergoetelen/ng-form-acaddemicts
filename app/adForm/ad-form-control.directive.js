(function () {
    'use strict';


    angular.module('acaddemict.form')
        .directive('adFormControl', adForm);

    adForm.$inject = [];
    function adForm() {
        var vm = {};

        vm.restrict = "E";
        vm.templateUrl = "app/adForm/ad-form-control.tmpl.html";
        vm.scope = {
            text: '@',
            model: '=',
            attributes: '='
        };
        vm.link = link;
        vm.controller = controller;
        vm.controllerAs = "adForm";
        vm.bindToController = true;

        return vm;

        function controller() {

        }

        function link(scope, element, attrs) {
            var $element = angular.element(element.find('input')[0]);

            if (angular.isObject(scope.adForm.attributes)) {
                angular.forEach(scope.adForm.attributes, function (val, key) {
                    $element.attr(key, val);
                });
            }
        }
    }

}());