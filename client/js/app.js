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

		//Usuário
		.state('listaUsuario', {
			url : "/lista-usuario",
			templateUrl : "views/usuario/listaUsuario.html",
			controller : "UsuarioListaController"
		})

		.state('adicionaUsuario',{
			url : '/adiciona-usuario',
			templateUrl : "views/usuario/adicionaUsuario.html",
			controller : "UsuarioAdicionaController"
		})

		.state('editaUsuario', {
			'url' : '/edita-usuario/:id',
			'templateUrl' : 'views/usuario/editaUsuario.html',
			'controller' : 'UsuarioEditaController'
		})

		.state('adicionaBaixa', {
			url : "/adiciona-baixa",
			templateUrl : "views/baixa/adicionaBaixa.html",
			controller : "BaixaAdicionaController"
		})

		.state('listaBaixa', {
			url : "/lista-baixa",
			templateUrl : "views/baixa/listaBaixa.html",
			controller : "BaixaListaController"
		})

	}]);