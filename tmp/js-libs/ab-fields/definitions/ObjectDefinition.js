jsLibs.exportModule('ab-fields', 'definitions/ObjectDefinition', (require, module) => { 'use strict';

const 
    js0 = require('js0'),

    ObjectField = require('../fields/ObjectField'),

    Definition = require('./Definition'),
    ListDefinition = require('./ListDefinition'),
    VarDefinition = require('./VarDefinition')
;


class ObjectDefinition extends Definition
{

    get fields() {
        return this._fieldDefinitions;
    }


    constructor()
    { super();

        this._fieldDefinitions = {};
    }

    exists(fieldName)
    {
        return fieldName in this._fieldDefinitions;
    }

    get(fieldName)
    {
        if (!this.exists(fieldName))
            throw new Error(`Field definition '${fieldName}' does not exist.`);

        return this._fieldDefinitions[fieldName];
    }

    list(fieldName)
    {
        js0.args(arguments, 'string');

        if (fieldName in this._fieldDefinitions) {
            let def = this._fieldDefinitions[fieldName];
            if (!(def instanceof ListDefinition))
                throw new Error(`Field '${fieldName}' already defined not as 'List'.`);
          
            return def;
        }

        let def = new ListDefinition();
        this._fieldDefinitions[fieldName] = def;

        return def;
    }

    object(fieldName)
    {
        js0.args(arguments, 'string');

        if (fieldName in this._fieldDefinitions) {
            let def = this._fieldDefinitions[fieldName];
            if (!(def instanceof ObjectDefinition))
                throw new Error(`Field '${fieldName}' already defined not as 'Var'.`);
            return def;
        }

        let def = new ObjectDefinition();
        this._fieldDefinitions[fieldName] = def;

        return def;
    }

    var(fieldName)
    {   
        js0.args(arguments, 'string');

        if (fieldName in this._fieldDefinitions) {
            let def = this._fieldDefinitions[fieldName];
            if (!(def instanceof VarDefinition))
                throw new Error(`Field '${fieldName}' already defined not as 'Var'.`);
            return def;
        }

        let def = new VarDefinition();
        this._fieldDefinitions[fieldName] = def;

        return def;
    }

    /* Definition Overrides */
    create(keys = [], root = null, fieldName = null)
    {
        js0.args(arguments, [ js0.Default, Array ], [ js0.Default, 'object' ], 
                [ js0.Default, 'string' ]);

        let field = new ObjectField(this, keys);

        if (root !== null && fieldName !== null) {
            Object.defineProperty(root, fieldName, {
                get: () => {
                    return field.$value;
                },
                set: (value) => {
                    field.$value = value;
                },
                enumerable: true,
            });
        }

        return field;
    }
    /* / Definition Overrides */

}
module.exports = ObjectDefinition;





 });