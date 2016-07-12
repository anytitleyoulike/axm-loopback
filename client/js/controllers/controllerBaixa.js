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

	.controller('BaixaAdicionaController', ['$scope','ProdutoEstoque','ProdutoSolicitacaoBaixaEstoque','Usuario', function($scope,ProdutoEstoque,ProdutoSolicitacaoBaixaEstoque,Usuario) {
		$scope.baixa = {};

		 var query = {
		 	'filter' : {
		 		'include' : 'produto',
		 	}
		 };

		$scope.produtos = ProdutoEstoque.find(query);
		$scope.usuarios = Usuario.find();

		$scope.adicionaBaixa = function(baixa) {
			$scope.baixa.di = 0;
			var q = {
				filter : {
					where : {produtoId : baixa.produtoId}
				}
			};

			ProdutoEstoque.findOne(q, function (res,err) {
				//comparação entre a qtd solicitada <=> qtd em estoque
				if(baixa.quantidade > res.quantidade - res.quantidadeBaixa) {
					$scope.alerta = true;
				console.log("Não temos produtos suficientes em estoque");
				} else {
					ProdutoSolicitacaoBaixaEstoque.create($scope.baixa, function (res,err) {
						console.log(res);
				 	});
				}
			});
		}
	}])

	.controller('EditaBaixaController', ['$scope','$stateParams','ProdutoSolicitacaoBaixaEstoque','ProdutoEstoque','Usuario', 
		function($scope,$stateParams,ProdutoSolicitacaoBaixaEstoque,ProdutoEstoque,Usuario){
		$scope.baixas = {};
		var query = {
			filter : {
				include : 'produto'
			}
		}
		$scope.produtos = ProdutoEstoque.find(query);
		$scope.usuarios = Usuario.find();

		var q = {
			filter : {
				where : {di: $stateParams.id}
			}
		};
		ProdutoSolicitacaoBaixaEstoque.findOne(q, function (res,err) {
			$scope.baixa = res;
			console.log(res);
		});

		$scope.editaBaixa = function (obj) {
			ProdutoSolicitacaoBaixaEstoque.prototype$updateAttributes({id: obj.di}, obj, function (res) {
				console.log(res);
			});
		}
	}])