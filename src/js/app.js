angular.module('personApp', [])
    .controller('personController', function personController($scope) {
        $scope.successMessage = "Why is this not working";

        $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

        // $scope.addPerson = function() {
        //     $scope.successMessage = "daskfjasf";

        //     var personToAdd = {
        //         "firstName": this.firstName,
        //         "lastName": this.lastName,
        //         "email": this.email
        //     };

        //     $scope.firstName = '';
        //     $scope.lastName = '';
        //     $scope.email = '';

        //     /*$http({
        //         url: '/api/person',
        //         method: 'POST',
        //         data: personToAdd
        //     }).then(function (response) {
        //         //$scope.successMessage = response.data;
        //         return response;
        //     });*/
        // };
    });