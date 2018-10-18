"use strict";
{
    angular.module('app')
        .controller('SocialPostsController', function() {
            const $ctrl = this;

            $ctrl.posts = [
                {title: "Cat", thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus velit, aliquam quis velit non, dictum luctus ipsum."},
                {title: "Dog", thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus velit, aliquam quis velit non, dictum luctus ipsum."},
                {title: "Mouse", thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus velit, aliquam quis velit non, dictum luctus ipsum."},
                {title: "Fish", thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus velit, aliquam quis velit non, dictum luctus ipsum."},
            ];

            $ctrl.selectColor = function (post) {
                $ctrl.item = post;
            };
            
            $ctrl.delete = function (index) {
                $ctrl.posts.splice(index, 1);
            }

            $ctrl.addPost = function(newpost) {
                $ctrl.posts.unshift(newpost);
                $ctrl.showme = false;
                $ctrl.hideme = false;
            }

            $ctrl.openForm = function() {
                $ctrl.showme = true;
                $ctrl.hideme = true;
            }

        });
}