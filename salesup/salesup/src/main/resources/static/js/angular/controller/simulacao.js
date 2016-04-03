/*
 * Trabalhando com injeção de dependencias.
 * ItemService é injetado e seus objetos instanciados são compartilhados pelos outros controladores
 * 
 */

google.load('visualization', '1', {
  packages: ['corechart']
});
 
google.setOnLoadCallback(function() {
  angular.bootstrap(document.body, ['salesApp']);
});
 
 
angular.module('salesApp').controller('SimulacaoController', function ($scope, $uibModal, $log) {
	

	$scope.produto = {}; 
	
	var self = this;
    self.tab = 'first';   
    self.opentab = function(tab) {  
      console.log(tab); 
      self.tab = tab;
    };     
     
     
    self.open = function (size) {
    	$scope.produto = {};
        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html', 
          controller: ModalInstanceCtrl,  
          size: 'sm',  
          resolve: {
            produto: function () {
              return $scope.produto;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };
        
  }) 
  .controller('SubController', ['ItemService',
    
    function(ItemService) {
    var self = this;
    self.list = function() { 
      return ItemService.list();
    };
    

    self.add = function() {
      ItemService.add({  
        id: self.list().length + 1,
        label: 'Produto  ' + self.list().length,
        valor: Math.random()
      }); 
      
	    chart.draw(data, options);

    };
   
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
     var chart = new google.visualization.LineChart(document.getElementById('chart_div_simulacao'));


	    var data = new google.visualization.DataTable();
	    data.addColumn('string', 'Produto'); 
	    data.addColumn('number', 'Preço');
	     
	    var itemsGrafico = [];
	    itemsGrafico =  ItemService.list();
 
			 for(var i = 0; i < itemsGrafico.length; i++) {  
	                var n = Number(itemsGrafico[i].valor);
	                var desc = itemsGrafico[i].label;
	                data.addRow([desc, n]);  
	            } 
			 
    
   

  }]) 
 
  .factory('ItemService', [function() { 
	  var items = [
	               {id: 1, label: 'Produto 0', valor: 15},
	               {id: 2, label: 'Produto 1', valor: 10}
	               ];
	  
	  return {
		  list: function() {
			return items;
		},
		add: function(item) {
			items.push(item);
		}
	  };
	  
  }]);
  
 
var ModalInstanceCtrl  = function ($scope, $uibModalInstance, produto, ItemService) {
		  $scope.produto = {};	
	      $scope.produto = produto;
	      
	     
	      $scope.ok = function () {

	    	$uibModalInstance.close();
		    ItemService.add(produto);
		     
		  };

		  $scope.cancel = function () {
		    $uibModalInstance.dismiss('cancel');
		  };
};
