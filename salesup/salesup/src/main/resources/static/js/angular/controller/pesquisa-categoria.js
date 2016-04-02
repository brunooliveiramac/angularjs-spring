angular.module('salesApp').controller('CategoriasController', function($scope, recursoCategoria, $resource, $location, $routeParams) {
		
	var selfCategorias = this;
	  
	selfCategorias.mesagem = '';   
	$scope.categorias = [];
	   
    
	recursoCategoria.query(function(categorias){
		$scope.categorias = categorias; 
     }, function(erro){ 
     	console.log(erro);
     });	 
	
						 
});