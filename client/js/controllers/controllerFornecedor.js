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

	.controller('FornecedorAdicionaController', ['$scope','$state','Fornecedor','$location', function($scope,$state,Fornecedor,$location){
		$scope.form = {};
		//buscando cpf existente
		$scope.adicionaFornecedor = function(fornecedor){
			var q = {
				filter : {
					where : {cpf: fornecedor.cpf}
				}
			};

			Fornecedor.find(q, function (res,err) {
				 console.log(res);
				 if(res.length > 0) {
				 	$scope.alerta = true;
				 } else {
				 	$scope.alerta = false;
					fornecedor.id = 0;

					Fornecedor.create(fornecedor, function(res,err) {
						console.log(res);
				 		$location.path("/lista-fornecedor");
					})
				 }
			});
		}
	}])

	.controller('FornecedorEditaController', ['$scope','$stateParams','Fornecedor','$location', function ($scope,$stateParams,Fornecedor,$location){
		$scope.fornecedor ={};

		var query = {
			filter : {
				where : {id:$stateParams.id}
			}
		};

		$scope.fornecedor = Fornecedor.findOne(query);

		$scope.editaFornecedor = function(obj) {
			var q = {
				filter : {
					where : {cpf : obj.cpf}
				}
			}

			Fornecedor.find(q, function (res,err) {
				 if(res.length > 0) {
				 	$scope.alerta = true;
				 } else {
				 	$scope.alerta = false;
				 	Fornecedor.upsert(obj);
				 	$location.path("/lista-fornecedor");
				 }
			});
		}
	}]);