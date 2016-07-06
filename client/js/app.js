/**
*  Module
*
* Description
*/
angular.module('axm-loopback', ['ui.router','lbServices'])

	.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

		$stateProvider

		.state('adicionaFornecedor', {
			url : "/adiciona-fornecedor",
			templateUrl : "views/fornecedor/adicionaFornecedor.html",
			controller : "FornecedorAdicionaController"
		})

		.state('listaFornecedor', {
			url : "/lista-fornecedor",
			templateUrl : "views/fornecedor/listaFornecedor.html",
			controller : "FornecedorListaController"
		})

		//Produto
		.state('listaProduto', {
			url : "/lista-produto",
			"templateUrl" : "views/produto/listaProduto.html",
			controller : "ProdutoListaController"
		})

		.state('adicionaProduto', {
			url : "/adiciona-produto",
			"templateUrl" : "views/produto/adicionaProduto.html",
			controller : "ProdutoAdicionaController"
		})

		//Compra
		.state('adicionaCompra', {
			url : "/adiciona-compra",
			templateUrl : "views/compra/adicionaCompra.html",
			controller : "CompraAdicionaController"
		})

		.state('listaCompra', {
			url : "/lista-compra",
			templateUrl : "views/compra/listaCompra.html",
			controller : "CompraListaController"
		})

	}]);