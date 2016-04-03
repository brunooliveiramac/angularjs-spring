angular.module('salesApp').controller('ProdutosController', function($scope, recursoProduto, $resource,$location, cadastroDeProdutos, $routeParams) {
		
	var selfProdutos = this;
	 
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

						 
});