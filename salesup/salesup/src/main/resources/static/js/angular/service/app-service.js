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
							mensagem : 'Produto alterado!',
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