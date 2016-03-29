angular.module('salesApp').controller('ProdutoController', function($scope, recursoProduto, $resource,$location, cadastroDeProdutos, $routeParams) {
		
	
	$scope.mesagem = '';
	$scope.produtos = [];
	
	
	
	recursoProduto.query(function(produtos){
     	$scope.produtos = produtos;
     }, function(erro){
     	console.log(erro);
     });

	
	
	$scope.remover = function(produto) {
		recursoProduto.delete({produtoId : produto.codigo}, function() {
			var indiceProduto = $scope.produtos.indexOf(produto);
			$scope.produtos.splice(indiceProduto, 1);
			 
			$scope.mensagem = 'Produto excluido com sucesso!';
		}, function(erro) {
			 $scope.mensagem = 'Erro';
		});
		
		
	};
	
	if($routeParams.produtoId){
		recursoProduto.get({produtoId : $routeParams.produtoId}, function(produto) {
			
			$scope.produto = produto;
			
		}, function(erro) {
			$scope.mensagem = 'Erro ao obter produto!';
		});
	}
	
	 
	$scope.submeter = function() { 
		if($scope.formulario_produto.$valid){
			
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