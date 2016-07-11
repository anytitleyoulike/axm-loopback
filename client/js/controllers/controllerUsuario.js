'use strict';
angular.module('axm-loopback')
	.controller('UsuarioListaController', ['$scope','$state','Usuario', '$location', function($scope,$state,Usuario,$location){
		$scope.usuarios = {};
		function listaUsuario(){
			Usuario.find().$promise.then(function (res,err) {
				$scope.usuarios = res;
			})
		}
		listaUsuario();

		$scope.editaUsuario = function (user) {
		 	$location.path('/edita-usuario/'+user.id);
		}
	}])

	.controller('UsuarioAdicionaController', ['$scope','$state','Usuario', function($scope,$state,Usuario){
		$scope.usuario = {}

		$scope.adicionaUsuario = function() {
			$scope.usuario.id = 0;
			$scope.usuario.dataCriacao = new Date();

			Usuario.create($scope.usuario, function (err,res) {

			});
		}
	}])
	.controller('UsuarioEditaController', ['$scope','$stateParams','Usuario', function($scope,$stateParams,Usuario){
		$scope.usuario = {}

		var query = {
			filter : {
				where : {id : $stateParams.id}
			}
		};
		Usuario.findOne(query,function (res,err) {
			$scope.usuario = res;
		})

		$scope.editaUsuario = function(user) {
			Usuario.upsert(user, function (res,err) {
			});
		}

	}])
