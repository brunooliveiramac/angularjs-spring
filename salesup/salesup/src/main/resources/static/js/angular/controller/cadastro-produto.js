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
					 
});