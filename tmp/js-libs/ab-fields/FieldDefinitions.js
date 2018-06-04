jsLibs.exportModule('ab-fields', 'FieldDefinitions', (require, module) => { 'use strict';

const
    js0 = require('js0'),

    Fields = require('./Fields')
;

class FieldDefinitions
{

    constructor(definitions = null)
    {
        js0.args(arguments, [ Array, js0.Default ]);

        this._definitions = {
            _: definitions === null ? [] : definitions,
        };
    }

    createFields(keys = [])
    {
        js0.args(arguments, [ Array, js0.Default ]);

        let fields = new Fields(keys);

        for (let i = 0; i < this._definitions._.length; i++)
            this._definitions._[i].define(fields);

        return fields;
    }

    list(fieldName)
    {
        js0.args(arguments, 'string', [ 'object', js0.Default ]);

        this._definitions[fieldName] = [];

        let definition = new FieldDefinitions.ListDefinition(this, fieldName);
        this._definitions._.push(definition);

        return definition;
    }

    object(fieldName, listeners = {})
    {
        js0.args(arguments, 'string', [ 'object', js0.Default ]);

        let definition = new FieldDefinitions.ObjectDefinition(this, fieldName, 
                listeners);
        this._definitions._.push(definition);

        return definition;
    }

    var(fieldName, listeners = {})
    {
        js0.args(arguments, 'string', [ 'object', js0.Default ]);

        let definition = new FieldDefinitions.VarDefinition(this, fieldName, 
                listeners);
        this._definitions._.push(definition);

        return definition;
    }

}
module.exports = FieldDefinitions;


Object.defineProperty(FieldDefinitions, 'Definition', { 
    value:
    class FieldDefinitions_Definition {

        constructor(parent, fieldName)
        {
            this.__parent = parent;
            this.__fieldName = fieldName;
            this.__listeners = [];
        }

        addListener(listener)
        {
            this.__listeners.push(listener);
        }

        define(fields) { js0.virtual(this); }


        _validate(fieldName)
        {
            if (this._fields.exists(fieldName))
                throw new Error(`Field '${fieldName}' already exists.`);
        }

    }
});


Object.defineProperties(FieldDefinitions, {

    ListDefinition: { value:
    class FieldDefinitions_ListDefinition extends FieldDefinitions.Definition {

        constructor(parent, fieldName, definitions)
        {
            super(parent, fieldName);

            this.fieldDefinitions = new FieldDefinitions(definitions);
        }

        define(fields)
        {
            let [ root, fieldName ] = fields.getFieldInfo(this.__fieldName);

            fields.defList(this.__fieldName, new FieldDefinitions(
                    this.__parent._definitions[this.__fieldName]), this.__listeners);

            Object.defineProperty(root, fieldName, {
                get: () => {
                    return (key) => {
                        let list = fields.getList(this.__fieldName);

                        if (typeof key === 'undefined')
                            return list;
                        else {
                            if (!list.$has(key))
                                list.$add(key);

                            return list.$getFields(key).getRoot();
                        }
                    }
                },
                set: (value) => {
                    if (!js0.type(value, js0.Iterable))
                        throw new Error('List value must be an iterable.');

                    if (value instanceof Array) {
                        for (let i = 0; i < value.length; i++) {
                            let item = root[fieldName](i);
                            let itemFields = value[i];
                            
                            for (let itemFieldName in itemFields)
                                item[itemFieldName] = itemFields[itemFieldName];
                        }
                    } else {
                        throw new Error('Not implemented yet.');
                        // for (let [ itemFieldKey, itemFieldValue ] of value)
                        //     root[fieldName](itemFieldKey) = itemFieldValue;
                    }
                },
            });
        }

    }},


    ObjectDefinition: { value:
    class FieldDefinitions_ObjectDefinition extends FieldDefinitions.Definition {

        constructor(parent, fieldName)
        {
            super(parent, fieldName);
        }

        define(fields)
        {
            let [ root, fieldName ] = fields.getFieldInfo(this.__fieldName);

            fields.defObject(this.__fieldName);

            Object.defineProperty(root, fieldName, {
                get: () => {
                    return fields.getObject(this.__fieldName);
                },
                set: (value) => {
                    return fields.setObject(value);
                },
                enumerable: true,
            });
        }

    }},


    VarDefinition: { value:
    class FieldDefinitions_VarDefinition extends FieldDefinitions.Definition {

        constructor(parent, fieldName, listeners)
        {
            super(parent, fieldName, listeners);
        }

        define(fields)
        {
            let [ root, fieldName ] = fields.getFieldInfo(this.__fieldName);

            fields.defVar(this.__fieldName, this.__listeners);

            Object.defineProperty(root, fieldName, {
                get: () => {
                    return fields.getVar(this.__fieldName).value;
                },
                set: (value) => {
                    fields.setVar(this.__fieldName, value);  
                },
                enumerable: true,
            });
        }

    }},

});





 });