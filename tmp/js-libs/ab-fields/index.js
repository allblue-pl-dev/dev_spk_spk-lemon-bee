jsLibs.exportModule('ab-fields', 'index', (require, module) => { 'use strict';

const
    ListDefinition = require('./definitions/ListDefinition'),
    ObjectDefinition = require('./definitions/ObjectDefinition'),
    VarDefinition = require('./definitions/VarDefinition'),

    ListField = require('./fields/ListField'),
    ObjectField = require('./fields/ObjectField'),
    VarField = require('./fields/VarField')
;

module.exports.Debug = false;
module.exports.setDebug = function setDebug(debug) {
    module.exports.Debug = debug;
};

module.exports.ListDefinition = ListDefinition;
module.exports.ObjectDefinition = ObjectDefinition;
module.exports.VarDefinition = VarDefinition;

module.exports.ListField = ListField;
module.exports.ObjectField = ObjectField;
module.exports.VarField = VarField;

module.exports.define = function define() {
    return new ObjectDefinition();
}





 });