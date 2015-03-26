(function () {
    'use strict';

    angular.module('app')
        .controller('LayoutController', LayoutController);

    function LayoutController() {
        var vm = this;

        vm.formData = {};
        vm.attributes = { required: true, minlength: 5 };
    }

}());