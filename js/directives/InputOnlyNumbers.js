function InputOnlyNumbers() {
    "use strict";
    return {
        require: 'ngModel',
        scope: {
            model: '=',
            min: '=',
            max: '='
        },
        link: function (scope, element, attrs, ngModel) {

            function setValidity(boolean) {
                ngModel.$setValidity('rangeError', boolean);
            }

            function checkRangeValidity(newVal) {
                var checkResult = true;

                if (scope.max && newVal > scope.max) {
                    checkResult = false;
                }

                if (scope.min && newVal < scope.min) {
                    checkResult = false;
                }

                setValidity(checkResult);
            }

            //keep only numbers and change numbered value to integer, to avoid typing like 00, 01 and so on
            function filterValue(text) {
                var regex, filteredText;
                regex = new RegExp(/^0+(?!$)|[^\d]/g);

                if (text && text.match(regex)) {
                    filteredText = text.replace(regex, '');
                    ngModel.$setViewValue(filteredText);
                    ngModel.$render();
                } else {
                    filteredText = text;
                }

                checkRangeValidity(filteredText);

                return filteredText;
            }

            ngModel.$parsers.push(filterValue);

        }
    };
}