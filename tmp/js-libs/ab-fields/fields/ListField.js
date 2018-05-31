jsLibs.exportModule('ab-fields', 'fields/ListField', (require, module) => { 'use strict';

const 
    js0 = require('js0'),

    ListDefinition = require('../definitions/ListDefinition'),

    Field = require('./Field')
;

class ListField extends Field {

    get $size() {
        return this._items.size;
    }

    get $value() {
        let self = this;
        return function() {
            let hasKey = arguments.length > 0;
            let hasValue = arguments.length > 1;

            if (arguments.length > 0) {
                let key = arguments[0];
                if (!js0.type(key, [ 'number', 'string' ]))
                    throw new Error(`List 'key' must be a number or string.`);

                if (!self.$has(key))
                    self.$add(key);

                if (arguments.length > 1) {
                    self.$get(key).$value = arguments[1];
                    return undefined;
                }

                return self.$get(key).$value;
            }
            
            return self;
        }
    }
    set $value(value) {
        if (!js0.type(value, [ js0.Null, js0.Iterable ]))
            throw new Error('List value must be an iterable or null.');

        if (value === null)
            return;

        if (value instanceof Array) {
            for (let i = 0; i < value.length; i++)
                this.$set(i, value[i]);
        } else {
            // throw new Error('Not implemented yet.');
            for (let [ key, item ] of value)
                this.$set(key, item);
        }
    }

    constructor(definition, keys)
    { super(definition, keys);
        js0.args(arguments, ListDefinition, Array);

        this._root = {};
        this._items = new js0.List();
    }   

    [Symbol.iterator]()
    {
        return new ListField.Iterator(this);
    }

    $add(key, value = null)
    {
        js0.args(arguments, [ 'number', 'string' ]);

        console.log('Adding', key, value);

        if (this._items.has(key))
            throw new Error(`Key '${key}' already exists in list.`);

        let keys = this.__keys.slice();
        keys.push(key);

        let itemField = this.__definition.item().create(keys);
        this._items.set(key, itemField);

        for (let listener of this.__definition.listeners) {
            if ('add' in listener)
                listener.add(key, this.__keys);
        }

        this.$get(key).$value = value;
    }

    $delete(key)
    {
        js0.args(arguments, [ 'number', 'string' ]);

        if (!this.$has(key))
            throw new Error(`Key '${key}' does not exist in 'ListField'.`);

        this._items.delete(key);

        for (let listener of this.__definition._listeners) {
            if ('delete' in listener)
                listener.delete(key, this.__keys);
        }
    }

    $get(key)
    {
        js0.args(arguments, [ 'number', 'string' ]);

        if (!(this._items.has(key)))
            throw new Error(`Item '${key}' does not exist in list.`);

        return this._items.get(key);
    }

    $has(key)
    {
        return this._items.has(key);
    }

    $push(value = null)
    {
        let index = 0;
        if (this._items.size === 0)
            this.$add(index);

        let lastKey = this._items.getKeyAt(this._items.size - 1);
        if (Number.isInteger(lastKey))
            index = lastKey + 1;

        while (this.$has(index))
            index++;

        this.$add(index, value);
        this.$get(index).$value = value;
    }

    $set(key, value)
    {
        js0.args(arguments, [ 'number', 'string' ]);

        if (!this.$has(key))
            this.$add(key);

        this.$get(key).$value = value;
    }

}
module.exports = ListField;


Object.defineProperties(ListField, {

    Iterator: { value:
    class ListField_Iterator
    {

        constructor(listField)
        {
            this._list = listField;
            this._iterator = listField._items[Symbol.iterator]();
        }

        next()
        {
            let iteratorItem = this._iterator.next();

            if (iteratorItem.done)
                return { value: undefined, done: true, };

            return {
                value: [ iteratorItem.value[0], this._list.$get(iteratorItem.value[0]), ],
                done: false,
            };
        }

    }},

});





 });