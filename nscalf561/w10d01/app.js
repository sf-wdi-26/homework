var app = angular.module('movieApp', []);

app.controller('MovieCtrl', ['$scope', function($scope) {
	$scope.moviesToWatch = [
	    {
	      title: 'Inside Out',
	      image: 'http://blogs-images.forbes.com/markhughes/files/2015/06/INSIDE-OUT-18.jpg'
	    },
	    {
	      title: 'Star Wars: Episode VII',
	      image: 'http://cdn.wegotthiscovered.com/wp-content/uploads/star-wars-episode-72.jpg'
	    },
	    {
	      title: 'Shaun the Sheep',
	      image: 'https://silentlondon.files.wordpress.com/2015/01/shaun_chase_quad_uk-release-date.jpg'
	    },
	    {
	      title: 'The Big Short',
	      image: 'http://static.standard.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2015/09/22/17/rysangos.jpg'
	    },
	    {
	      title: 'Steve Jobs',
	      image: 'http://www.geek.com/wp-content/uploads/2015/10/steve-jobs-movie-2015-holding.jpg'
	    },
	    {
	      title: 'Trainwreck',
	      image: 'http://www.trbimg.com/img-55a53d5c/turbine/ct-trainwreck-movie-review-amy-schumer-20150713'
	    }
	  ];
}]);