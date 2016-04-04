angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
	
	var ddo = {};
	
	ddo.retrict = "AE";
    ddo.transclude = true; //Tem elementos filhos

	ddo.scope = { 
			nome: '@nome',
			descricao: '@descricao',
			valor: '@valor', 
			produto: '='
	} 
	 
    ddo.templateUrl = 'js/angular/directive/meu-painel.html';

	
	return ddo;
	
})