'use strict';

angular
	.module("axm-loopback")

	.controller('ProdutoListaController',['$scope','Produto', function($scope,Produto) {

		function listaProduto(){

			$scope.produtos={};

			Produto.find().$promise.then(function(res,err){
				$scope.produtos = res;
			});

		};

		listaProduto();

	}])

	.controller('ProdutoAdicionaController', ['$scope','$state','Produto', function($scope,$state,Produto){

		$scope.form = {};
		$scope.adicionaProduto = function(){

			$scope.form.imgPath = 'path-to-img';
			$scope.form.id = 0;

			Produto.create($scope.form,function(res,err){

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
			Produto.prototype$updateAttributes({id : obj.id}, obj, function (res) {
				console.log(res);
			});
		}
	}])



