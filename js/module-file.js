// module appvalidation
var app_validation = angular.module('appvalidation', []);
// example validation
var NAME_REGEXP = /^[a-zA-Z.\s]*$/;
var URL_REGEXP = /^ari.com$/;
var AGE_REGEXP = /^[\d]+$/;
var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;

// validation for name
app_validation.directive('validEmail', function(){
	return{
		require: '?ngModel',
		link: function(scope, elm, attrs, ctrl){
		// only apply the validator if ngModel is present and Angular has added the email validator
      	if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default Angular email validator
	        ctrl.$validators.email = function(modelValue) {
	          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
	        };
    	}
		}	
	};
});
// example validation name
app_validation.directive('validName', function(){
	return{
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl){
		ctrl.$validators.name = function(modelValue, viewValue){
			var value = modelValue || viewValue;
            if (ctrl.$isEmpty(value)) {
                // consider empty models to be valid
                return true;
            }
            if (NAME_REGEXP.test(value)) {
                // it is valid
                return true;
            }
            // it is invalid
            return false;
		};
	}	
};
});
// end example name

// exampel validation URL
app_validation.directive('validUrl', function(){
	return{
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl){
		ctrl.$validators.url = function(modelValue, viewValue){
			var value = modelValue || viewValue;
            if (ctrl.$isEmpty(value)) {
                // consider empty models to be valid
                return true;
            }
            if (URL_REGEXP.test(value)) {
                // it is valid
                return true;
            }
            // it is invalid
            return false;
		};
	}	
};
});
// end URL

// example validation age
app_validation.directive('validAge', function(){
	return{
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl){
		ctrl.$validators.age = function(modelValue, viewValue){
			var value = modelValue || viewValue;
            if (ctrl.$isEmpty(value)) {
                // consider empty models to be valid
                return true;
            }
            if (AGE_REGEXP.test(value)) {
                // it is valid
                return true;
            }
            // it is invalid
            return false;
		};
	}	
};
});
// end Age
// end validation

// controller for save and show
app_validation.controller('ctrlForm',function($scope) {
	$scope.saved = {};
    $scope.save_data = function(player){
    	angular.copy(player, $scope.saved);
    };
});
// end controller
// end module

// example binding data with ng-model (save)
var app_create = angular.module('appCreate', []);

app_create.controller('ctrlForm',function($scope) {
	$scope.saved = {};
    $scope.save_data = function(player){
    	angular.copy(player, $scope.saved);
    };
});
// end save

// example var app
var app = angular.module("appModule", []);

app.directive("directive", function() {
	return {
		templateUrl: "user.html"	
	
	};
});

app.controller('appCtrlUser',function($scope){
	$scope.name = "Ari fakhri wilaga";
	$scope.job ="Web Programmer";
	$scope.skills = ["AngularJS","Laravel 5"];
});

app.controller('appCtrlUserCreate',function($scope){
	$scope.name_create = "Ari fakhri wilaga";
	$scope.rename = function(newName){
		$scope.name_create = newName;
	}
});
// end var app

// example var app_three
var app_three = angular.module("myApp", []);

app_three.directive("testDirective", function() {
    return {
        template : "Hello World"
    };
});
// end var app_three

// start app_game
var app_game = angular.module("appModuletwo", []);

app_game.controller('ctrlDirective',function($scope){
	$scope.playerOne = {
		name : 'Ari',
		level : '17'
	}

	$scope.playerTwo = {
		name : 'Fakhri',
		level : 'S'
	}
});

// example select scope
app_game.directive("getPlayer",function(){
	return {
		restriction : 'E', //this restriction level Element
		scope: {
			selectscope: '='
		},

		template : 'Name Player : <span ng-bind="selectscope.name"></span><br>Level : <span ng-bind="selectscope.level"></span><br><p>'
	};
});



// example basic directive
// app_game.directive("getPlayer",function(){
// 	return {
// 		template : 'Name Player : <span ng-bind="player.name"></span><br>Level : <span ng-bind="player.level"</span>'
// 	};
// });

// end var app_game 


