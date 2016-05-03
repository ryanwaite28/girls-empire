// Main Angular Application
var App = angular.module("myApp", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {

	var dropArrow = $('#drop-arrow');
	var nav = $('#navigate');
	var menuDiv = $('#menu-div');

	dropArrow.click(function(){

		if( nav.css('display') == 'none' ) {
			nav.show('fast');
			menuDiv.show('fast');
			dropArrow.addClass('rotate');
		}
		else {
			nav.hide('fast');
			menuDiv.hide('fast');
			dropArrow.removeClass('rotate');
		}

	});

	$(window).resize(function() {

		var cWidth = $(window).width();

		if( cWidth > 815 ) {
			if( nav.css('display') == 'none' ) {
				dropArrow.removeClass('rotate');
				nav.show('fast');
				menuDiv.show('fast');
			}
    }
		else {
			if( nav.css('display') != 'none' ) {
				nav.hide('fast');
				menuDiv.hide('fast');
			}
		}

	});

	$(window).scroll(function(){

		var wHeight = $(window).scrollTop();
		var u = $('#demo').position();
		var h2 = u.top;

		if( wHeight > h2 ) {
			$('#topbar').addClass('lg');
		}
		else {
			$('#topbar').removeClass('lg');
		}
	});

	$(document).keyup(function(t){
		if( t.keyCode == 27 ) {
			window.removeEventListener('DOMMouseScroll' , false);
			window.onwheel = null;
		}
	});

	$scope.modal = '';

	$scope.showModal = function( str ) {
		if( str == 'in' ) {
			$scope.modal = document.getElementById('signin-modal');
		}
		else if( str == 'up' ) {
			$scope.modal = document.getElementById('signup-modal');
		}
		$scope.modal.showModal();
		window.addEventListener('DOMMouseScroll' , false);
		window.onwheel = preventDefault;
	}

	$scope.closeModal = function() {
		$scope.modal.close();
		window.removeEventListener('DOMMouseScroll' , false);
		window.onwheel = null;
	}

});

//

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}
