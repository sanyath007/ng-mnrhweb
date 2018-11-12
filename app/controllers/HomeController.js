app.controller('HomeController', function ($scope, CONFIG) {
		console.log(CONFIG.BASE_URL);
		$scope.pageTitle = "This is Home page.";
});