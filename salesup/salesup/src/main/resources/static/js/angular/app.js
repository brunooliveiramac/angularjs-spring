angular.module('salesApp', [ 'ngRoute', 'meusServicos', 'ngAnimate', 'ui.bootstrap', 'minhasDiretivas']).config(function($routeProvider, $httpProvider) {

	$routeProvider.when('/', {  
		templateUrl : 'home.html',
		controller : 'DashboardController',
		controllerAs: 'controller '
	}).when('/login', {
		templateUrl : 'login.html',
		controller : 'navigation',
		controllerAs : 'controller' 
	}).when('/formproduto', {
		templateUrl : 'produto_cadastro.html',
		controller : 'ProdutoController',
		controllerAs : 'controller' 
	})
	.when('/produtos', {  
		templateUrl : 'produtos_pesquisa.html',
		controller : 'ProdutosController',
		controllerAs : 'controller' 
	}) 
	.when('/produtos/editar/:produtoId', { 
		templateUrl : 'produto_cadastro.html',
		controller : 'ProdutoController',
		controllerAs : 'controller' 
	})
	.when('/simulacao', {  
		templateUrl : 'simulacao.html',
		controller : 'SimulacaoController',
		controllerAs : 'contr' 

	})
	.when('/carrinho', {    
		templateUrl : 'carrinho.html'
	}) 
	.when('/carrinho/add/:produtoId', {    
		templateUrl : 'carrinho.html',
		controller : 'CarrinhoController'
	})
	.when('/ver', {  
		templateUrl : 'ver_produto.html'

	}).otherwise('/');

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	
}).controller('navigation',

function($rootScope, $http, $location, $route) {
	 
	var self = this;

	self.tab = function(route) {
		return $route.current && route === $route.current.controller;
	};

	var authenticate = function(credentials, callback) {

		var headers = credentials ? {
			authorization : "Basic "
					+ btoa(credentials.username + ":"
							+ credentials.password)
		} : {};

		$http.get('user', {
			headers : headers
		}).success(function(data) {
			if (data.name) {
				$rootScope.authenticated = true;
			} else {
				$rootScope.authenticated = false;
			}
			callback && callback();
		}).error(function() {
			$rootScope.authenticated = false;
			callback && callback();
		});

	}

	authenticate();

	self.credentials = {};
	self.login = function() {
		authenticate(self.credentials, function() {
			if ($rootScope.authenticated) {
				console.log("Login succeeded")
				$location.path("/produtos"); 
				self.error = false;
				$rootScope.authenticated = true;
			} else {
				console.log("Login failed")
				$location.path("/login");
				self.error = true;
				$rootScope.authenticated = false;
			}
		})
	};

	
	self.logout = function() {
		$http.post('logout', {}).finally(function() {
			$rootScope.authenticated = false;
			$location.path("/");
		});
	}

}).controller('home', function($http) {
	var self = this; 
	$http.get('token').success(function(token) {
		$http({
			url : 'http://localhost:9000',
			method : 'GET', 
			headers : {
				'X-Auth-Token' : token.token
			}  
		}).success(function(data) {

		});
	})
});