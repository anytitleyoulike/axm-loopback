// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Compra
 * @header lbServices.Compra
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Compra` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Compra",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Compras/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Compra.fornecedor() instead.
        "prototype$__get__fornecedor": {
          url: urlBase + "/Compras/:id/fornecedor",
          method: "GET"
        },

        // INTERNAL. Use Compra.produto() instead.
        "prototype$__get__produto": {
          url: urlBase + "/Compras/:id/produto",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#create
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Compras",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#createMany
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Compras",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#upsert
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Compras",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#exists
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Compras/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#findById
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Compras/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#find
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Compras",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#findOne
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Compras/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#updateAll
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Compras/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#deleteById
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Compras/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#count
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Compras/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#prototype$updateAttributes
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Compras/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Compra#createChangeStream
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Compras/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Fornecedor.compras.findById() instead.
        "::findById::Fornecedor::compras": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fornecedors/:id/compras/:fk",
          method: "GET"
        },

        // INTERNAL. Use Fornecedor.compras.destroyById() instead.
        "::destroyById::Fornecedor::compras": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fornecedors/:id/compras/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Fornecedor.compras.updateById() instead.
        "::updateById::Fornecedor::compras": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fornecedors/:id/compras/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Fornecedor.compras() instead.
        "::get::Fornecedor::compras": {
          isArray: true,
          url: urlBase + "/Fornecedors/:id/compras",
          method: "GET"
        },

        // INTERNAL. Use Fornecedor.compras.create() instead.
        "::create::Fornecedor::compras": {
          url: urlBase + "/Fornecedors/:id/compras",
          method: "POST"
        },

        // INTERNAL. Use Fornecedor.compras.createMany() instead.
        "::createMany::Fornecedor::compras": {
          isArray: true,
          url: urlBase + "/Fornecedors/:id/compras",
          method: "POST"
        },

        // INTERNAL. Use Fornecedor.compras.destroyAll() instead.
        "::delete::Fornecedor::compras": {
          url: urlBase + "/Fornecedors/:id/compras",
          method: "DELETE"
        },

        // INTERNAL. Use Fornecedor.compras.count() instead.
        "::count::Fornecedor::compras": {
          url: urlBase + "/Fornecedors/:id/compras/count",
          method: "GET"
        },

        // INTERNAL. Use Produto.compra.findById() instead.
        "::findById::Produto::compra": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/compra/:fk",
          method: "GET"
        },

        // INTERNAL. Use Produto.compra.destroyById() instead.
        "::destroyById::Produto::compra": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/compra/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Produto.compra.updateById() instead.
        "::updateById::Produto::compra": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/compra/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Produto.compra() instead.
        "::get::Produto::compra": {
          isArray: true,
          url: urlBase + "/Produtos/:id/compra",
          method: "GET"
        },

        // INTERNAL. Use Produto.compra.create() instead.
        "::create::Produto::compra": {
          url: urlBase + "/Produtos/:id/compra",
          method: "POST"
        },

        // INTERNAL. Use Produto.compra.createMany() instead.
        "::createMany::Produto::compra": {
          isArray: true,
          url: urlBase + "/Produtos/:id/compra",
          method: "POST"
        },

        // INTERNAL. Use Produto.compra.destroyAll() instead.
        "::delete::Produto::compra": {
          url: urlBase + "/Produtos/:id/compra",
          method: "DELETE"
        },

        // INTERNAL. Use Produto.compra.count() instead.
        "::count::Produto::compra": {
          url: urlBase + "/Produtos/:id/compra/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Compra#updateOrCreate
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Compra#update
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Compra#destroyById
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Compra#removeById
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Compra#modelName
    * @propertyOf lbServices.Compra
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Compra`.
    */
    R.modelName = "Compra";


        /**
         * @ngdoc method
         * @name lbServices.Compra#fornecedor
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Fetches belongsTo relation fornecedor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        R.fornecedor = function() {
          var TargetResource = $injector.get("Fornecedor");
          var action = TargetResource["::get::Compra::fornecedor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Compra#produto
         * @methodOf lbServices.Compra
         *
         * @description
         *
         * Fetches belongsTo relation produto.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        R.produto = function() {
          var TargetResource = $injector.get("Produto");
          var action = TargetResource["::get::Compra::produto"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Fornecedor
 * @header lbServices.Fornecedor
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Fornecedor` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Fornecedor",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Fornecedors/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Fornecedor.compras.findById() instead.
        "prototype$__findById__compras": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fornecedors/:id/compras/:fk",
          method: "GET"
        },

        // INTERNAL. Use Fornecedor.compras.destroyById() instead.
        "prototype$__destroyById__compras": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fornecedors/:id/compras/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Fornecedor.compras.updateById() instead.
        "prototype$__updateById__compras": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fornecedors/:id/compras/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Fornecedor.compras() instead.
        "prototype$__get__compras": {
          isArray: true,
          url: urlBase + "/Fornecedors/:id/compras",
          method: "GET"
        },

        // INTERNAL. Use Fornecedor.compras.create() instead.
        "prototype$__create__compras": {
          url: urlBase + "/Fornecedors/:id/compras",
          method: "POST"
        },

        // INTERNAL. Use Fornecedor.compras.destroyAll() instead.
        "prototype$__delete__compras": {
          url: urlBase + "/Fornecedors/:id/compras",
          method: "DELETE"
        },

        // INTERNAL. Use Fornecedor.compras.count() instead.
        "prototype$__count__compras": {
          url: urlBase + "/Fornecedors/:id/compras/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#create
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Fornecedors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#createMany
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Fornecedors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#upsert
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Fornecedors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#exists
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Fornecedors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#findById
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Fornecedors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#find
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Fornecedors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#findOne
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Fornecedors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#updateAll
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Fornecedors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#deleteById
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Fornecedors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#count
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Fornecedors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#prototype$updateAttributes
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Fornecedors/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#createChangeStream
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Fornecedors/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Compra.fornecedor() instead.
        "::get::Compra::fornecedor": {
          url: urlBase + "/Compras/:id/fornecedor",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#updateOrCreate
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#update
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#destroyById
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#removeById
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fornecedor` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Fornecedor#modelName
    * @propertyOf lbServices.Fornecedor
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Fornecedor`.
    */
    R.modelName = "Fornecedor";

    /**
     * @ngdoc object
     * @name lbServices.Fornecedor.compras
     * @header lbServices.Fornecedor.compras
     * @object
     * @description
     *
     * The object `Fornecedor.compras` groups methods
     * manipulating `Compra` instances related to `Fornecedor`.
     *
     * Call {@link lbServices.Fornecedor#compras Fornecedor.compras()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Fornecedor#compras
         * @methodOf lbServices.Fornecedor
         *
         * @description
         *
         * Queries compras of Fornecedor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R.compras = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::get::Fornecedor::compras"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor.compras#count
         * @methodOf lbServices.Fornecedor.compras
         *
         * @description
         *
         * Counts compras of Fornecedor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.compras.count = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::count::Fornecedor::compras"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor.compras#create
         * @methodOf lbServices.Fornecedor.compras
         *
         * @description
         *
         * Creates a new instance in compras of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R.compras.create = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::create::Fornecedor::compras"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor.compras#createMany
         * @methodOf lbServices.Fornecedor.compras
         *
         * @description
         *
         * Creates a new instance in compras of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R.compras.createMany = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::createMany::Fornecedor::compras"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor.compras#destroyAll
         * @methodOf lbServices.Fornecedor.compras
         *
         * @description
         *
         * Deletes all compras of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.compras.destroyAll = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::delete::Fornecedor::compras"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor.compras#destroyById
         * @methodOf lbServices.Fornecedor.compras
         *
         * @description
         *
         * Delete a related item by id for compras.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for compras
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.compras.destroyById = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::destroyById::Fornecedor::compras"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor.compras#findById
         * @methodOf lbServices.Fornecedor.compras
         *
         * @description
         *
         * Find a related item by id for compras.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for compras
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R.compras.findById = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::findById::Fornecedor::compras"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fornecedor.compras#updateById
         * @methodOf lbServices.Fornecedor.compras
         *
         * @description
         *
         * Update a related item by id for compras.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for compras
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R.compras.updateById = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::updateById::Fornecedor::compras"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Produto
 * @header lbServices.Produto
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Produto` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Produto",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Produtos/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Produto.compra.findById() instead.
        "prototype$__findById__compra": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/compra/:fk",
          method: "GET"
        },

        // INTERNAL. Use Produto.compra.destroyById() instead.
        "prototype$__destroyById__compra": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/compra/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Produto.compra.updateById() instead.
        "prototype$__updateById__compra": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/compra/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.findById() instead.
        "prototype$__findById__produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "GET"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.destroyById() instead.
        "prototype$__destroyById__produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.updateById() instead.
        "prototype$__updateById__produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Produto.compra() instead.
        "prototype$__get__compra": {
          isArray: true,
          url: urlBase + "/Produtos/:id/compra",
          method: "GET"
        },

        // INTERNAL. Use Produto.compra.create() instead.
        "prototype$__create__compra": {
          url: urlBase + "/Produtos/:id/compra",
          method: "POST"
        },

        // INTERNAL. Use Produto.compra.destroyAll() instead.
        "prototype$__delete__compra": {
          url: urlBase + "/Produtos/:id/compra",
          method: "DELETE"
        },

        // INTERNAL. Use Produto.compra.count() instead.
        "prototype$__count__compra": {
          url: urlBase + "/Produtos/:id/compra/count",
          method: "GET"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques() instead.
        "prototype$__get__produtoSolicitacaoBaixaEstoques": {
          isArray: true,
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques",
          method: "GET"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.create() instead.
        "prototype$__create__produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques",
          method: "POST"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.destroyAll() instead.
        "prototype$__delete__produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques",
          method: "DELETE"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.count() instead.
        "prototype$__count__produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#create
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Produtos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#createMany
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Produtos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#upsert
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Produtos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#exists
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Produtos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#findById
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Produtos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#find
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Produtos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#findOne
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Produtos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#updateAll
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Produtos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#deleteById
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Produtos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#count
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Produtos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#prototype$updateAttributes
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Produtos/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Produto#createChangeStream
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Produtos/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Compra.produto() instead.
        "::get::Compra::produto": {
          url: urlBase + "/Compras/:id/produto",
          method: "GET"
        },

        // INTERNAL. Use ProdutoSolicitacaoBaixaEstoque.produto() instead.
        "::get::ProdutoSolicitacaoBaixaEstoque::produto": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/:id/produto",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Produto#updateOrCreate
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Produto#update
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Produto#destroyById
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Produto#removeById
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Produto#modelName
    * @propertyOf lbServices.Produto
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Produto`.
    */
    R.modelName = "Produto";

    /**
     * @ngdoc object
     * @name lbServices.Produto.compra
     * @header lbServices.Produto.compra
     * @object
     * @description
     *
     * The object `Produto.compra` groups methods
     * manipulating `Compra` instances related to `Produto`.
     *
     * Call {@link lbServices.Produto#compra Produto.compra()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Produto#compra
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Queries compra of Produto.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R.compra = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::get::Produto::compra"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.compra#count
         * @methodOf lbServices.Produto.compra
         *
         * @description
         *
         * Counts compra of Produto.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.compra.count = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::count::Produto::compra"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.compra#create
         * @methodOf lbServices.Produto.compra
         *
         * @description
         *
         * Creates a new instance in compra of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R.compra.create = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::create::Produto::compra"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.compra#createMany
         * @methodOf lbServices.Produto.compra
         *
         * @description
         *
         * Creates a new instance in compra of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R.compra.createMany = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::createMany::Produto::compra"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.compra#destroyAll
         * @methodOf lbServices.Produto.compra
         *
         * @description
         *
         * Deletes all compra of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.compra.destroyAll = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::delete::Produto::compra"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.compra#destroyById
         * @methodOf lbServices.Produto.compra
         *
         * @description
         *
         * Delete a related item by id for compra.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for compra
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.compra.destroyById = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::destroyById::Produto::compra"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.compra#findById
         * @methodOf lbServices.Produto.compra
         *
         * @description
         *
         * Find a related item by id for compra.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for compra
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R.compra.findById = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::findById::Produto::compra"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.compra#updateById
         * @methodOf lbServices.Produto.compra
         *
         * @description
         *
         * Update a related item by id for compra.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for compra
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Compra` object.)
         * </em>
         */
        R.compra.updateById = function() {
          var TargetResource = $injector.get("Compra");
          var action = TargetResource["::updateById::Produto::compra"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Produto.produtoSolicitacaoBaixaEstoques
     * @header lbServices.Produto.produtoSolicitacaoBaixaEstoques
     * @object
     * @description
     *
     * The object `Produto.produtoSolicitacaoBaixaEstoques` groups methods
     * manipulating `ProdutoSolicitacaoBaixaEstoque` instances related to `Produto`.
     *
     * Call {@link lbServices.Produto#produtoSolicitacaoBaixaEstoques Produto.produtoSolicitacaoBaixaEstoques()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Produto#produtoSolicitacaoBaixaEstoques
         * @methodOf lbServices.Produto
         *
         * @description
         *
         * Queries produtoSolicitacaoBaixaEstoques of Produto.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R.produtoSolicitacaoBaixaEstoques = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::get::Produto::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.produtoSolicitacaoBaixaEstoques#count
         * @methodOf lbServices.Produto.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Counts produtoSolicitacaoBaixaEstoques of Produto.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.produtoSolicitacaoBaixaEstoques.count = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::count::Produto::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.produtoSolicitacaoBaixaEstoques#create
         * @methodOf lbServices.Produto.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Creates a new instance in produtoSolicitacaoBaixaEstoques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R.produtoSolicitacaoBaixaEstoques.create = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::create::Produto::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.produtoSolicitacaoBaixaEstoques#createMany
         * @methodOf lbServices.Produto.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Creates a new instance in produtoSolicitacaoBaixaEstoques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R.produtoSolicitacaoBaixaEstoques.createMany = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::createMany::Produto::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.produtoSolicitacaoBaixaEstoques#destroyAll
         * @methodOf lbServices.Produto.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Deletes all produtoSolicitacaoBaixaEstoques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.produtoSolicitacaoBaixaEstoques.destroyAll = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::delete::Produto::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.produtoSolicitacaoBaixaEstoques#destroyById
         * @methodOf lbServices.Produto.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Delete a related item by id for produtoSolicitacaoBaixaEstoques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for produtoSolicitacaoBaixaEstoques
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.produtoSolicitacaoBaixaEstoques.destroyById = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::destroyById::Produto::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.produtoSolicitacaoBaixaEstoques#findById
         * @methodOf lbServices.Produto.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Find a related item by id for produtoSolicitacaoBaixaEstoques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for produtoSolicitacaoBaixaEstoques
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R.produtoSolicitacaoBaixaEstoques.findById = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::findById::Produto::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Produto.produtoSolicitacaoBaixaEstoques#updateById
         * @methodOf lbServices.Produto.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Update a related item by id for produtoSolicitacaoBaixaEstoques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for produtoSolicitacaoBaixaEstoques
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R.produtoSolicitacaoBaixaEstoques.updateById = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::updateById::Produto::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ProdutoEstoque
 * @header lbServices.ProdutoEstoque
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ProdutoEstoque` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ProdutoEstoque",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ProdutoEstoques/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#create
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ProdutoEstoques",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#createMany
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ProdutoEstoques",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#upsert
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ProdutoEstoques",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#exists
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ProdutoEstoques/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#findById
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ProdutoEstoques/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#find
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ProdutoEstoques",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#findOne
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ProdutoEstoques/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#updateAll
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/ProdutoEstoques/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#deleteById
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/ProdutoEstoques/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#count
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ProdutoEstoques/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#prototype$updateAttributes
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ProdutoEstoques/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#createChangeStream
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ProdutoEstoques/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#updateOrCreate
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#update
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#destroyById
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ProdutoEstoque#removeById
         * @methodOf lbServices.ProdutoEstoque
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoEstoque` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ProdutoEstoque#modelName
    * @propertyOf lbServices.ProdutoEstoque
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ProdutoEstoque`.
    */
    R.modelName = "ProdutoEstoque";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ProdutoSolicitacaoBaixaEstoque
 * @header lbServices.ProdutoSolicitacaoBaixaEstoque
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ProdutoSolicitacaoBaixaEstoque` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ProdutoSolicitacaoBaixaEstoque",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ProdutoSolicitacaoBaixaEstoques/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ProdutoSolicitacaoBaixaEstoque.produto() instead.
        "prototype$__get__produto": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/:id/produto",
          method: "GET"
        },

        // INTERNAL. Use ProdutoSolicitacaoBaixaEstoque.usuario() instead.
        "prototype$__get__usuario": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/:id/usuario",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#create
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#createMany
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#upsert
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#exists
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#findById
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#find
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#findOne
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#updateAll
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#deleteById
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#count
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#prototype$updateAttributes
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#createChangeStream
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.findById() instead.
        "::findById::Produto::produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "GET"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.destroyById() instead.
        "::destroyById::Produto::produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.updateById() instead.
        "::updateById::Produto::produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques() instead.
        "::get::Produto::produtoSolicitacaoBaixaEstoques": {
          isArray: true,
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques",
          method: "GET"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.create() instead.
        "::create::Produto::produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques",
          method: "POST"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.createMany() instead.
        "::createMany::Produto::produtoSolicitacaoBaixaEstoques": {
          isArray: true,
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques",
          method: "POST"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.destroyAll() instead.
        "::delete::Produto::produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques",
          method: "DELETE"
        },

        // INTERNAL. Use Produto.produtoSolicitacaoBaixaEstoques.count() instead.
        "::count::Produto::produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Produtos/:id/produtoSolicitacaoBaixaEstoques/count",
          method: "GET"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.findById() instead.
        "::findById::Usuario::produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "GET"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.destroyById() instead.
        "::destroyById::Usuario::produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.updateById() instead.
        "::updateById::Usuario::produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques() instead.
        "::get::Usuario::produtoSolicitacaoBaixaEstoques": {
          isArray: true,
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques",
          method: "GET"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.create() instead.
        "::create::Usuario::produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques",
          method: "POST"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.createMany() instead.
        "::createMany::Usuario::produtoSolicitacaoBaixaEstoques": {
          isArray: true,
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques",
          method: "POST"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.destroyAll() instead.
        "::delete::Usuario::produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.count() instead.
        "::count::Usuario::produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#updateOrCreate
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#update
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#destroyById
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#removeById
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ProdutoSolicitacaoBaixaEstoque#modelName
    * @propertyOf lbServices.ProdutoSolicitacaoBaixaEstoque
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ProdutoSolicitacaoBaixaEstoque`.
    */
    R.modelName = "ProdutoSolicitacaoBaixaEstoque";


        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#produto
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Fetches belongsTo relation produto.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Produto` object.)
         * </em>
         */
        R.produto = function() {
          var TargetResource = $injector.get("Produto");
          var action = TargetResource["::get::ProdutoSolicitacaoBaixaEstoque::produto"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ProdutoSolicitacaoBaixaEstoque#usuario
         * @methodOf lbServices.ProdutoSolicitacaoBaixaEstoque
         *
         * @description
         *
         * Fetches belongsTo relation usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.usuario = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::ProdutoSolicitacaoBaixaEstoque::usuario"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Usuario
 * @header lbServices.Usuario
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Usuario` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Usuario",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Usuarios/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.findById() instead.
        "prototype$__findById__produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "GET"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.destroyById() instead.
        "prototype$__destroyById__produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.updateById() instead.
        "prototype$__updateById__produtoSolicitacaoBaixaEstoques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques() instead.
        "prototype$__get__produtoSolicitacaoBaixaEstoques": {
          isArray: true,
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques",
          method: "GET"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.create() instead.
        "prototype$__create__produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques",
          method: "POST"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.destroyAll() instead.
        "prototype$__delete__produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.produtoSolicitacaoBaixaEstoques.count() instead.
        "prototype$__count__produtoSolicitacaoBaixaEstoques": {
          url: urlBase + "/Usuarios/:id/produtoSolicitacaoBaixaEstoques/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#create
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Usuarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#createMany
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Usuarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#upsert
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Usuarios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#exists
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Usuarios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#findById
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Usuarios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#find
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Usuarios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#findOne
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Usuarios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#updateAll
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Usuarios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#deleteById
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Usuarios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#count
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Usuarios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$updateAttributes
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Usuarios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#createChangeStream
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Usuarios/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ProdutoSolicitacaoBaixaEstoque.usuario() instead.
        "::get::ProdutoSolicitacaoBaixaEstoque::usuario": {
          url: urlBase + "/ProdutoSolicitacaoBaixaEstoques/:id/usuario",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Usuario#updateOrCreate
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Usuario#update
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Usuario#destroyById
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Usuario#removeById
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Usuario#modelName
    * @propertyOf lbServices.Usuario
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Usuario`.
    */
    R.modelName = "Usuario";

    /**
     * @ngdoc object
     * @name lbServices.Usuario.produtoSolicitacaoBaixaEstoques
     * @header lbServices.Usuario.produtoSolicitacaoBaixaEstoques
     * @object
     * @description
     *
     * The object `Usuario.produtoSolicitacaoBaixaEstoques` groups methods
     * manipulating `ProdutoSolicitacaoBaixaEstoque` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#produtoSolicitacaoBaixaEstoques Usuario.produtoSolicitacaoBaixaEstoques()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Usuario#produtoSolicitacaoBaixaEstoques
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Queries produtoSolicitacaoBaixaEstoques of Usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R.produtoSolicitacaoBaixaEstoques = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::get::Usuario::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.produtoSolicitacaoBaixaEstoques#count
         * @methodOf lbServices.Usuario.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Counts produtoSolicitacaoBaixaEstoques of Usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.produtoSolicitacaoBaixaEstoques.count = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::count::Usuario::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.produtoSolicitacaoBaixaEstoques#create
         * @methodOf lbServices.Usuario.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Creates a new instance in produtoSolicitacaoBaixaEstoques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R.produtoSolicitacaoBaixaEstoques.create = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::create::Usuario::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.produtoSolicitacaoBaixaEstoques#createMany
         * @methodOf lbServices.Usuario.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Creates a new instance in produtoSolicitacaoBaixaEstoques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R.produtoSolicitacaoBaixaEstoques.createMany = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::createMany::Usuario::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.produtoSolicitacaoBaixaEstoques#destroyAll
         * @methodOf lbServices.Usuario.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Deletes all produtoSolicitacaoBaixaEstoques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.produtoSolicitacaoBaixaEstoques.destroyAll = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::delete::Usuario::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.produtoSolicitacaoBaixaEstoques#destroyById
         * @methodOf lbServices.Usuario.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Delete a related item by id for produtoSolicitacaoBaixaEstoques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for produtoSolicitacaoBaixaEstoques
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.produtoSolicitacaoBaixaEstoques.destroyById = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::destroyById::Usuario::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.produtoSolicitacaoBaixaEstoques#findById
         * @methodOf lbServices.Usuario.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Find a related item by id for produtoSolicitacaoBaixaEstoques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for produtoSolicitacaoBaixaEstoques
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R.produtoSolicitacaoBaixaEstoques.findById = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::findById::Usuario::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.produtoSolicitacaoBaixaEstoques#updateById
         * @methodOf lbServices.Usuario.produtoSolicitacaoBaixaEstoques
         *
         * @description
         *
         * Update a related item by id for produtoSolicitacaoBaixaEstoques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for produtoSolicitacaoBaixaEstoques
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ProdutoSolicitacaoBaixaEstoque` object.)
         * </em>
         */
        R.produtoSolicitacaoBaixaEstoques.updateById = function() {
          var TargetResource = $injector.get("ProdutoSolicitacaoBaixaEstoque");
          var action = TargetResource["::updateById::Usuario::produtoSolicitacaoBaixaEstoques"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
