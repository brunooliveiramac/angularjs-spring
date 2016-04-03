angular.module('salesApp').controller('ProdutoController', function($scope, recursoProduto, $resource,$location, cadastroDeProdutos, $routeParams) {
		
	$scope.produto = {}; 
	$scope.mesagem = '';
	$scope.produtos = []; 
	
	
	if($routeParams.produtoId){
		recursoProduto.get({produtoId : $routeParams.produtoId}, function(produto) {
			$scope.produto = produto;
		},  function(erro) {
			$scope.mensagem = 'Erro ao obter produto!';
		});
	}
	
	 
	$scope.submeter = function() { 
		if($scope.formulario_produto.$valid){
			console.log($scope.produto);

			cadastroDeProdutos.cadastrar($scope.produto)
			.then(function(dados) {
				$location.path('/produtos'); 
				$scope.mensagem = dados.mensagem;
				if($scope.inclusao) $scope.produto = {};
			})
			.catch(function(dados) {
				$scope.mesangem = dados.mensagem;
			});
		}	
	 };
	 
	  $scope.dateOptions = {
	    formatYear: 'yy',
	    maxDate: new Date(2020, 5, 22),
	    minDate: new Date(),
	    startingDay: 1
	 };
	  
	 $scope.open1 = function() {
	   $scope.popup1.opened = true;
	 };
	 
	  
	 $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'dd/MM/yyyy'];
	 $scope.format = $scope.formats[4];
	 $scope.altInputFormats = ['M!/d!/yyyy'];

	 $scope.popup1 = {
	  opened: false
	 };

					 
});