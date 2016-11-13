(function () {

    var app = angular.module('dynamicform', []);

    app.controller('dynamicform', function ($scope, $http) {
        $scope.newField = {};
        $scope.fields = [];

        $http.get('fields.json')
            .success(function (responce) {
                console.log(responce)

                $scope.fields = responce;

            });

        $scope.tokenize = function (slug1, slug2) {
            var result = slug1;
            result = result.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
            result = result.replace(/-/gi, "_");
            result = result.replace(/\s/gi, "-");
            if (slug2) {
                result += '-' + $scope.token(slug2);
            }
            return result;
        };


    })

})()