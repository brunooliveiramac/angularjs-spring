angular.module('salesApp').controller('ProdutosController', function($scope, recursoProduto, $resource,$location, cadastroDeProdutos, $routeParams) {
		
	var selfProdutos = this;
	 
	$scope.mesagem = '';
	$scope.produtos = [];
	

	recursoProduto.query(function(produtos){
		selfProdutos.produtos = produtos; 
     }, function(erro){
     	console.log(erro);
     });	 
	
	$scope.remover = function(produto) {
		recursoProduto.delete({produtoId : produto.codigo}, function() {
			var indiceProduto = selfProdutos.produtos.indexOf(produto); 
			selfProdutos.produtos.splice(indiceProduto, 1);
			selfProdutos.mensagem = 'Produto excluido com sucesso!';
		}, function(erro) {
			 $scope.mensagem = 'Erro';
		});		
	};

						 
});