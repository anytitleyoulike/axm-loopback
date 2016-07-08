'use strict';

angular.module('axm-loopback')
	.controller('BaixaListaController', ['$scope','ProdutoSolicitacaoBaixaEstoque','$location', function($scope,ProdutoSolicitacaoBaixaEstoque,$location){
		$scope.baixas = {};

		var query = {
			'filter' : {
				'include' : ['produto','usuario']
			}
		};


		function listaBaixa() {
			 ProdutoSolicitacaoBaixaEstoque.find(query).$promise.then(function (res,err) {
			 	 $scope.baixas = res;
			 })
		}
		listaBaixa();

		$scope.editaBaixa = function (param) {
			$location.path('/edita-baixa/'+param.di);
		}

	}])

	.controller('BaixaAdicionaController', ['$scope','Produto','ProdutoSolicitacaoBaixaEstoque','Usuario', function($scope,Produto,ProdutoSolicitacaoBaixaEstoque,Usuario) {
		$scope.baixa = {};

		 var query = {
		 	'filter' : {
		 		'include' : 'compra',
		 		'where' : {'quantidade' : {'gt' : 0}}
		 	}
		 };

		$scope.produtos = Produto.find(query);
		$scope.usuarios = Usuario.find();
		console.log($scope.produtos);
		$scope.adicionaBaixa = function() {
			$scope.baixa.di = 0;
			console.log($scope.baixa);
			ProdutoSolicitacaoBaixaEstoque.create($scope.baixa, function (res,err) {
				 console.log(res);
			});
		}
	}])

	.controller('EditaBaixaController', ['$scope','$stateParams','ProdutoSolicitacaoBaixaEstoque','Produto','Usuario', 
		function($scope,$stateParams,ProdutoSolicitacaoBaixaEstoque,Produto,Usuario){
		$scope.baixas = {};
		var query = {
			filter : {
				where : {id: $stateParams.id}
			}
		};

		$scope.produtos = Produto.find();
		$scope.usuarios = Usuario.find();

		ProdutoSolicitacaoBaixaEstoque.findOne(query, function (res,err) {
			$scope.baixa = res;
		});

		$scope.editaBaixa = function (obj) {
			ProdutoSolicitacaoBaixaEstoque.prototype$updateAttributes({id: obj.di}, obj, function (res) {
				console.log(res);
			});
		}
	}])