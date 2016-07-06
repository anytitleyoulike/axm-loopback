'use strict';
angular.module('axm-loopback')
	.controller('UsuarioListaController', ['$scope','$state','Usuario', function($scope,$state,Usuario){
		$scope.usuarios = {};
		function listaUsuario(){
			Usuario.find().$promise.then(function (res,err) {
				$scope.usuarios = res;
			})
		}
		listaUsuario();
	}])

	.controller('UsuarioAdicionaController', ['$scope','$state','Usuario', function($scope,$state,Usuario){
		$scope.usuario = {}

		$scope.adicionaUsuario = function() {
			$scope.usuario.id = 0;
			$scope.usuario.dataCriacao = new Date();

			Usuario.create($scope.usuario, function (res,err) {

			});
		}
	}])