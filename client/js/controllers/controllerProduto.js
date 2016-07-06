'use strict';

angular
	.module("axm-loopback")

	.controller('ProdutoListaController',['$scope','$state','Produto', function($scope,$state,Produto) {

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

	}]);



