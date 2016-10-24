$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: "http://localhost/FlightApp/v1/departureFlights",
        dataType: 'json', // Notice! JSONP <-- P (lowercase)
        success: function(data) {

            /* $("#departureFlights").append("<option value='" + data.departureFlights[0].airplanename + "\'>");
             $("#departureFlights").append("<option value='" + data.departureFlights[1].airplanename + "\'>");
             $("#departureFlights").append("<option value='" + data.departureFlights[2].airplanename + "\'>");*/

            $.each(data.departureFlights, function(index) {
                $('#departureFlights').append("<option value='" + data.departureFlights[index].airplanename + " - " + data.departureFlights[index].airplanecode + "\'>");
            });

        },
        error: function() {
            alert("Error");
        }
    });

    $('#departFlights').on('blur', function() {
        var string = $(this).val().split(" ");
        var code = string[string.length - 1];
        $.ajax({
            type: 'GET',
            url: "http://localhost/FlightApp/v1/destinationFlights/" + code,
            dataType: 'json', // Notice! JSONP <-- P (lowercase)
            success: function(data) {

                /* $("#departureFlights").append("<option value='" + data.departureFlights[0].airplanename + "\'>");
                 $("#departureFlights").append("<option value='" + data.departureFlights[1].airplanename + "\'>");
                 $("#departureFlights").append("<option value='" + data.departureFlights[2].airplanename + "\'>");*/
                $("#destinationFlights").html("");
                $.each(data.desFlights, function(index) {
                    $('#destinationFlights').append("<option value='" + data.desFlights[index].airplanename + " - " + data.desFlights[index].destination + "\'>");
                });

            },
            error: function() {
                alert("You haven't fill departure");
            }
        });
    });

    $('input:radio[name="flightType"]').on("change",
        function() {
            if ($(this).is(':checked') && $(this).val() == 'One way') {
                $("#returnDay").addClass('hideElement');
            } else {
                $("#returnDay").removeClass('hideElement');
            }
        });
});

var app = angular.module('mainApp', []);

app.controller('mainCtrl', function($scope) {
    $scope.places = [{
        icon: 'images/Hochiminh.jpg',
        name: 'HCM, Vietnam',
        description: 'Roma (tiếng Ý: Roma; tiếng Latinh: Rōma; còn gọi Rôma hay La Mã trong tiếng Việt) là thủ đô của nước Ý.',
        price: '199'
    }, {
        icon: 'images/Madrid.jpg',
        name: 'Madrid, Spain',
        description: 'Roma (tiếng Ý: Roma; tiếng Latinh: Rōma; còn gọi Rôma hay La Mã trong tiếng Việt) là thủ đô của nước Ý.',
        price: '199'
    }, {
        icon: 'images/Paris.jpg',
        name: 'Paris, France',
        description: 'Roma (tiếng Ý: Roma; tiếng Latinh: Rōma; còn gọi Rôma hay La Mã trong tiếng Việt) là thủ đô của nước Ý.',
        price: '199'
    }, {
        icon: 'images/London.jpg',
        name: 'London, England',
        description: 'Roma (tiếng Ý: Roma; tiếng Latinh: Rōma; còn gọi Rôma hay La Mã trong tiếng Việt) là thủ đô của nước Ý.',
        price: '199'
    }, {
        icon: 'images/Roma.jpg',
        name: 'Roma, Italia',
        description: 'Roma (tiếng Ý: Roma; tiếng Latinh: Rōma; còn gọi Rôma hay La Mã trong tiếng Việt) là thủ đô của nước Ý.',
        price: '199'
    }, {
        icon: 'images/Tokyo.jpg',
        name: 'Tokyo, Japan',
        description: 'Roma (tiếng Ý: Roma; tiếng Latinh: Rōma; còn gọi Rôma hay La Mã trong tiếng Việt) là thủ đô của nước Ý.',
        price: '199'
    }];
});

var app2 = angular.module('mainApp2', []);

app2.controller('mainCtrl2', function($scope) {
    $scope.customers = [{
        avatar: 'images/son.jpg',
        name: 'Hoang Thai Son',
        review: 'Good service. The staff are always nice and help me all the time.'
    }, {
        avatar: 'images/Kaka.jpg',
        name: 'Ricardo Kaka',
        review: 'The seats are comfortable and the meals are very delicious.'
    }, {
        avatar: 'images/quynh.jpg',
        name: 'Nguyen Van Quynh',
        review: 'Flight on time and safe. The drinks are tasty and well prepared.'
    }];
});

angular.element(document).ready(function() { angular.bootstrap(document.getElementById("review"), ['mainApp2']); });
