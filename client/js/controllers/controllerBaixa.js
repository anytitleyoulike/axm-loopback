'use strict';

angular.module('axm-loopback')
	.controller('BaixaListaController', ['$scope','ProdutoSolicitacaoBaixaEstoque', function($scope,ProdutoSolicitacaoBaixaEstoque){
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