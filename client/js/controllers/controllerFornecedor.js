'use strict';

angular
	.module('axm-loopback')
	.controller('FornecedorListaController',['$scope','$state','Fornecedor', function($scope,$state,Fornecedor){

		$scope.fornecedores = {}
		function listaFornecedor() {
			Fornecedor.find().$promise.then(function(res,err){
				$scope.fornecedores = res;
			})
		}


		listaFornecedor();
	}])

	.controller('FornecedorAdicionaController', ['$scope','$state','Fornecedor', function($scope,$state,Fornecedor){
		$scope.form = {};

		$scope.adicionaFornecedor = function(){
			//variável setada para definir o valor do auto increment
			$scope.form.id = 0;

			Fornecedor.create($scope.form, function(res,err) {
				console.log(res);
			})


		}
	}]);