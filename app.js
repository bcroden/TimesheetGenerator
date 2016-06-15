'use strict';

var weekday = [
    "Sun.",
    "Mon.",
    "Tue.",
    "Wed.",
    "Thur.",
    "Fri.",
    "Sat."
];

angular
    .module('app', [])
    .controller('pageController', [function() {
        var vm = this;

        vm.startInput = dateFormatter(new Date());

        vm.getStartDay = function() {
            return new Date(vm.startInput)
        };

        vm.getPrettyStart = function() {
            return dateFormatter(vm.getStartDay());
        };

        vm.getPrettyEnd = function() {
            var tmp = vm.getStartDay();
            tmp.setDate(tmp.getDate()+13);
            return dateFormatter(tmp);
        };

        var savedDay = new Date('1/1/1919');
        var rows = [];
        vm.getRows = function() {
            var date = vm.getStartDay();

            if(dateIsEqual(date, savedDay))
                return rows;

            rows = [];

            for(var i = 0; i < 14; i++) {
                var day = new Date(date);
                day.setDate(date.getDate()+i);

                rows.push({
                    day: weekday[day.getDay()],
                    date: dateFormatter(day)
                });
            }

            savedDay = date;
            return rows;
        }

        function dateFormatter(date) {
            var month = (date.getMonth()+1 > 9) ? date.getMonth()+1 : '0' + (date.getMonth()+1)
            var day   = (date.getDate() > 9) ? date.getDate()       : '0' + (date.getDate())
            var year  = date.getFullYear()

            return month + '/' + day + '/' + year;
        }

        function dateIsEqual(date1, date2) {
            return date1.getMonth() === date2.getMonth() && date1.getDay() === date2.getDay() && date1.getFullYear() === date2.getFullYear();
        }
    }]);
