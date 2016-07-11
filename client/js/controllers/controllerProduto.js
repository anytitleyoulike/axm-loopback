'use strict';

angular
	.module("axm-loopback")

	.controller('ProdutoListaController',['$scope','Produto', function($scope,Produto) {

		function listaProduto(){

			$scope.produtos=[];

			Produto.find().$promise.then(function(res,err){
				$scope.produtos = res;
			});

		};

		listaProduto();

	}])

	.controller('ProdutoAdicionaController', ['$scope','$stateParams','Produto','$location', function($scope,$stateParams,Produto,$location){

		$scope.form = {};

		$scope.adicionaProduto = function(produto){
			var q = {
				filter : {
					where : {nome:produto.nome}
				}
			};
			// validando se já existe produto com nome igual.

			Produto.find(q, function (res,err) {
				if(res.length > 0) {
					$scope.alerta = true;
				} else {
					$scope.form.imgPath = 'path-to-img';
					$scope.form.id = 0;
					Produto.create($scope.form,function(res,err){
						$location.path('/lista-produto');
					});
				}
			});
		}

	}])

	.controller('ProdutoEditaController', ['$scope','$stateParams','Produto', function ($scope,$stateParams,Produto) {
		var query = {
			filter : {
				where : {id : $stateParams.id}
			}
		};

		$scope.produto = Produto.findOne(query);

		$scope.editaProduto = function (obj) {
			var q = {
				filter : {
					where : {nome:obj.nome}
				}
			};

			Produto.find(q, function (res,err) {
				if(res.length > 0) {
					$scope.alerta = true;
				} else {
					Produto.prototype$updateAttributes({id : obj.id}, obj, function (res) {
						console.log(res);
					});
				}
			});
		}
	}])



