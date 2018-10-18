"use strict";
{
    angular.module('app') 
        .component('postForm', {
            templateUrl: 'components/postForm/postForm.html',
            bindings: {
                onSubmit: '<'
            }
        });
}