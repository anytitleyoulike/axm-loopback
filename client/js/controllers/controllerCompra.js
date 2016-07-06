'use strict';

angular.module('axm-loopback')
	.controller('CompraListaController', ['$scope','$state','Compra', function($scope,$state,Compra){
		$scope.compras = {};
		var query = {
			"filter" : {
				"include" : ["produto" , "fornecedor"]
			}
		};

		function listaCompras() {
			Compra.find(query).$promise.then(function(res,err){
				$scope.compras = res;

			});
		}
		listaCompras();
	}])

	.controller('CompraAdicionaController', ['$scope','$state','Compra', function ($scope,$state,Compra) {
		$scope.form ={};

		$scope.adicionaCompra = function () {
			 console.log('blalalblalba');
		}
	}])