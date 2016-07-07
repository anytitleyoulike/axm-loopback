'use strict';

angular
	.module('axm-loopback')
	.controller('FornecedorListaController',['$scope','$location','Fornecedor', function($scope,$location,Fornecedor){

		$scope.fornecedores = {}
		function listaFornecedor() {
			Fornecedor.find().$promise.then(function(res,err){
				$scope.fornecedores = res;
			})
		}

		listaFornecedor();

		$scope.editaFornecedor = function (param) {
			$location.path("/edita-fornecedor/"+param.id);
		}

		$scope.deletaFornecedor = function(param){
			Fornecedor.deleteById(param.id, function (res,err) {
				console.log(res);
			});
		}
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
	}])

	.controller('FornecedorEditaController', ['$scope','$stateParams','Fornecedor', function ($scope,$stateParams,Fornecedor){
		$scope.fornecedor ={};

		var query = {
			filter : {
				where : {id:$stateParams.id}
			}
		};

		Fornecedor.findOne(query).$promise.then(function (res,err) {
			$scope.fornecedor = res;
		});

		$scope.editaFornecedor = function(object) {
			Fornecedor.upsert(object, function (res,err) {
			});
		}
	}]);