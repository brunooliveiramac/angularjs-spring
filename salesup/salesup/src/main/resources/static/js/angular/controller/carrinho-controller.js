angular.module('salesApp').controller('CarrinhoController', function($scope, recursoProduto, $resource,$location, cadastroDeProdutos, $routeParams, carrinhoFabrica) {
		
			
	$scope.produto = {}; 
	$scope.mesagem = '';
	$scope.produtos = []; 
	 
	$scope.produtos = carrinhoFabrica.list(); 
	  
	if($routeParams.produtoId){ 
		recursoProduto.get({produtoId : $routeParams.produtoId}, function(produto) {
			$scope.produto = produto;
			  
			carrinhoFabrica.add(produto);
			$scope.produtos = carrinhoFabrica.list();			
		},  function(erro) {
			$scope.mensagem = 'Erro ao obter produto!';
		});
	};
	
	 var atualizaCarrinho  = function() {  
	     return carrinhoFabrica.list();
	};
					   
});