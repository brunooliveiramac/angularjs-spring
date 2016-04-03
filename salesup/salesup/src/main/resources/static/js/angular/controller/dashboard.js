
google.load('visualization', '1', {
  packages: ['corechart']
});
 
google.setOnLoadCallback(function() {
  angular.bootstrap(document.body, ['salesApp']);
});
 
	 
angular.module('salesApp').controller('DashboardController', function($scope, recursoProduto) {

 		    var options = { 
				      title: 'Produtos:',
				      is3D: true,
		              width: '100%',
		              animation: {
		                  startup: true,
		                  duration: 1500,
		                  easing: 'linear'
		              }
				    };
		     var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
		
	 
			    var data = new google.visualization.DataTable();
			    data.addColumn('string', 'Produto'); 
			    data.addColumn('number', 'Preço');
			     
			     
				recursoProduto.query(function(produtos){
					$scope.produtos = produtos;  

					 for(var i = 0; i < produtos.length; i++) {  
			                var n = Number(produtos[i].valor);
			                var desc = produtos[i].descricao;
			                data.addRow([desc, n]); 
			            } 
					 
					    chart.draw(data, options);

					     		 			 
			     }, function(erro){  
			     	console.log(erro);
			     });	 

			    
		}
);