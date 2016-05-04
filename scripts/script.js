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

	$scope.bgimages = [
		'images/anj-1.png',
		'http://www.wallpapereast.com/static/images/Musical-Patterns-04.jpg',
		'http://static1.squarespace.com/static/5383a76de4b06dea6734f421/t/53f4acf1e4b05df1e95ecf5b/1408544029089/website+wallpaper.png?format=2500w',
		'http://randomwallpapers.net/of-website-designs-1920x1200-wallpaper401613.jpg',
		'http://www.wallpapersxl.com/wallpapers/1366x768/enjoy/351515/enjoy-our-website-hd-services-at-www-pics-efreez-com-351515.jpg',
		'http://74211.com/wallpaper/picture_big/Bright-Bubbles-on-Light-Green-Background-Style-is-Thus-Clean-and-Simple-Looking-Good-on-Any-Computer-HD-Creative-Wallpaper.jpg',
	];

	$('#banner').css('background-image' , 'url(' + $scope.bgimages[0] + ')');

	$(window).scroll(function(){

		var wHeight = $(window).scrollTop();

		var u = $('#demo').position();
		var h2 = u.top;

		var f = $('#semo').position();
		var h3 = f.top;

		var l = $('#gemo').position();
		var h4 = l.top;

		var v = $('#vemo').position();
		var h5 = v.top;

		if( wHeight > u.top ) {
			if( wHeight > l.top ) {
				if( wHeight > v.top ) {
					$('#topbar').addClass('lg');
					$('#banner').css('background-image' , 'url(' + $scope.bgimages[5] + ')');
				}
				else {
					$('#topbar').addClass('lg');
					$('#banner').css('background-image' , 'url(' + $scope.bgimages[3] + ')');
				}
			}
			else {
				$('#topbar').addClass('lg');
				$('#banner').css('background-image' , 'url(' + $scope.bgimages[4] + ')');
			}
		}
		else {
			$('#topbar').removeClass('lg');
			$('#banner').css('background-image' , 'url(' + $scope.bgimages[0] + ')');
		}

	});

	$(document).keyup(function(t){
		if( t.keyCode == 27 ) {
			window.removeEventListener('DOMMouseScroll' , false);
			window.onwheel = null;
		}
	});

	// --- //

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
