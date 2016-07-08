'use strict';

angular.module('axm-loopback')
	.controller('CompraListaController', ['$scope','$location','Compra', function($scope,$location,Compra){
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

		$scope.editaCompra = function (params) {
			$location.path(/edita-compra/+params.id);
		}

		$scope.deletaCompra = function (params) {
			 Compra.destroyById(params, function (res,err) {
			 	 console.log(res);
			 });
		}
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

	.controller('CompraEditaController', ['$scope','$stateParams','Compra','Fornecedor','Produto', function($scope,$stateParams,Compra,Fornecedor,Produto){
		$scope.compra = {};
		var query = {
			filter : {
				where : {id : $stateParams.id}
			}
		};
		$scope.fornecedores = Fornecedor.find();
		$scope.produtos = Produto.find();

		Compra.findOne(query, function (res,err) {
			 $scope.compra = res;

		});

		$scope.editaCompra = function (obj) {
			Compra.prototype$updateAttributes({id: obj.id},obj,
				function (response){
					console.log(response);
			})
		};
	}])