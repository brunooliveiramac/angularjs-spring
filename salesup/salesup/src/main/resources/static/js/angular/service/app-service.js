angular.module('meusServicos', ['ngResource'])
.factory('recursoProduto',function($resource) {
			
			return  $resource('/produtos/:produtoId', null,{
				update : {
					method: 'PUT'
				}
				
			});
}) 
.factory('cadastroDeProdutos', function(recursoProduto, $q) { //Um serviço depende de outro
	
		var servico = {};
		 
		servico.cadastrar = function(produto) {
			return $q(function(resolve, reject) {
				
				if(produto.codigo){
					recursoProduto.update({produtoId : produto.codigo}, produto, function() {
						resolve({
							mensagem : 'Produto alterado com sucesso!',
							inclusao : false
						});
					}, function() {
						reject({ mensagem : 'Erro ao alterar!'});
					});
					
				}else{
					
					recursoProduto.save(produto, function() {
						resolve({
							mensagem : 'Produto cadastrado com sucesso!',
							inclusao : true
						})
					}, function(erro) {
							reject({ mensagem : 'Erro ao incluir!'});
					});
				}
			});
		};
		
		return servico;
}) 
.factory('recursoCategoria', function($resource) {
	 
	return  $resource('/categorias/:categoriaId', null,{
		update : {
			method: 'PUT'
		}
		
	}); 
})
.factory('cadastroCategoria', function(recursoCategoria, $q) {
	
		
		var servico = {};
		 
		servico.cadastrar = function(categoria) {
				return $q(function(resolve, reject) {
					
					if(categoria.id){
						recursoCategoria.update({categoriaId : categoria.id}, categoria, function() {
							resolve({ 
								mensagem : 'Categoria ' + categoria.descricao + ' alterada com sucesso!',
								inclusao : false
							});  
						}, function(erro) {
							reject({ 
								mensagem : 'Erro ao alterar categoria',
							});
						});
					}else{ 
						recursoCategoria.save(produto,  function() {
							resolve({
								mensagem : 'Categoria '+ categoria.descricao + ' cadastrada com sucesso!',
								inclusao : true
							})
					 }, function(erro) {
						   reject({
							   mensagem : 'Erro ao cadastrar categoria!'
						   })
					 }); 
						
					}					
				});
		}
	
});