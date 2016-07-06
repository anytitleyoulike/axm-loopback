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

	.controller('CompraAdicionaController', ['$scope','$state','Compra','Fornecedor','Produto', function ($scope,$state,Compra,Fornecedor,Produto) {
		$scope.form ={};
		$scope.fornecedores = Fornecedor.find();
		$scope.produtos = Produto.find();

		$scope.adicionaCompra = function () {
			 $scope.form.id = 0;
			 $scope.form.dataCriacao = new Date();

			 Compra.create($scope.form, function (res,err) {
			 	 console.log(res);
			 })
		}
	}])