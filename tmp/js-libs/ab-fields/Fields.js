jsLibs.exportModule('ab-fields', 'Fields', (require, module) => { 'use strict';

const
    js0 = require('js0')
;

class Fields
{

    get root() {
        return this._root;
    }


    constructor(keys)
    {
        js0.args(arguments, Array);

        this._keys = keys;

        this._fields = {};

        this._root = {};
    }

    defList(fieldName, fieldDefinitions, listeners)
    {
        this._fields[fieldName] = new Fields.List(this, fieldDefinitions, listeners);
    }

    defObject(fieldName, fieldDefinitions, listeners)
    {
        console.log(fieldName);
        this._fields[fieldName] = new Fields.Object(this, fieldDefinitions, listeners, 
                this._keys);
    }

    defVar(fieldName, listeners)
    {
        if (!(fieldName in this._fields))
            this._fields[fieldName] = new Fields.Var(this, listeners);

        // this._vars[fieldName].addListener(listener);
    }

    getFieldInfo(fieldName)
    {
        let root = this._root;

        let fieldNameArr = fieldName.split('.');
        for (let i = 0; i < fieldNameArr.length - 1; i++) { 
            if (!(fieldNameArr[i] in root)) {
                let objectFieldName = fieldNameArr.slice(0, i + 1).join('.');

                this.defObject(objectFieldName);

                Object.defineProperty(root, fieldNameArr[i], {
                    get: () => {
                        return this.getObject(objectFieldName);
                    },
                    set: (value) => {
                        return this.setObject(objectFieldName, value);
                    },
                    enumerable: true,
                });
            }
            root = root[fieldNameArr[i]];
        }

        return [ root, fieldNameArr[fieldNameArr.length - 1] ];
    }

    getField(fieldName)
    {
        if (!(fieldName in this._fields))
            throw new Error(`Field '${fieldName}' does not exist.`);

        return this._fields[fieldName];
    }

    setObject(fieldName, value)
    {
        this._fields[fieldName].$set(value);
    }

    setList(fieldName, value)
    {
        this._fields[fieldName].$set(value);
    }

    setVar(fieldName, value)
    {
        if (!(fieldName in this._fields))
            throw new Error(`Fields var '${fieldName}' does not exist.`);

        this._fields[fieldName].$set(value);
    }

    _validateField(fieldName)
    {
        if (fieldName in this._fields)
            throw new Error(`Field '${fieldName}' already exists.`);
    }

}
module.exports = Fields;


Object.defineProperty(Fields, 'Field', {
value: class Fields_Field {

    constructor()
    {
        
    }

}});


Object.defineProperties(Fields, {

    List: { value:
    class Fields_List {

        get $size() {
            return this._fieldsList.size;
        }


        constructor(parentFields, fieldDefinitions, listeners)
        {
            this._parentFields = parentFields;
            this._fieldDefinition = fieldDefinitions;
            this._listeners = listeners;

            this._fieldsList = new Map();
        }   

        [Symbol.iterator]()
        {
            return new Fields.List.Iterator(this);
        }

        $add(key)
        {
            let keys = this._parentFields._keys.slice();
            keys.push(key);

            let instanceFields = this._fieldDefinition.createFields(keys);

            this._fieldsList.set(key, instanceFields);

            for (let listener of this.__definition.listeners) {
                if ('add' in listener)
                    listener.add(key, this.__keys);
            }
        }

        $has(key)
        {
            return this._fieldsList.has(key);
        }

        $getFields(key)
        {
            return this._fieldsList.get(key);
        }

        $pop()
        {
            if (this.$size <= 0)
                throw new Error(`Cannot '$pop' on empty 'ListField.`);

            let keys = this._fieldsList.keys();
            this.$delete(keys[keys.length - 1]);
        }

        $push()
        {
            let key = this.$size;
            while (this.$has(key))
                key++;

            this.$add(key);
        }

        $delete(key)
        {
            js0.args(arguments, [ 'number', 'string' ]);

            if (!this._fieldsList.has(key))
                throw new Error(`Key '${key}' does not exist in 'ListField'.`);

            this._fieldsList.delete(key);

            for (let listener of this._listeners) {
                if ('delete' in listener)
                    listener.delete(key, this._parentFields._keys);
            }
        }

    }},

    Object: { value:
    class Fields_Object {

        get $root() {
            return this._fields.root;
        }


        constructor(parentFields, fieldDefinitions, listeners, keys)
        {
            this._parentFields = parentFields;
            this._fieldDefinition = fieldDefinitions;
            this._listeners = listeners;

            this._fields = fieldDefinitions.createFields(keys);
        }   

        $delete(key)
        {
            js0.args(arguments, [ 'number', 'string' ]);

            if (!this._fieldsList.has(key))
                throw new Error(`Key '${key}' does not exist in 'ListField'.`);

            delete fields[key];

            for (let listener of this._listeners) {
                if ('delete' in listener)
                    listener.delete(key, this._parentFields._keys);
            }
        }

        $get(key)
        {
            js0.args(arguments, [ 'number', 'string' ]);

            if (!(key in this._fields))
                throw new Error(`Field '${key}' does not exist in object.`);

            return this._fields[key];
        }

        $set(value)
        {
            js0.args(arguments, 'object');

            for (let key in value) {
                if (key in this._fields.has(key))
                    this._fields[key] = value[key];
            }

            // for (let listener of this._listeners) {
            //     if ('set' in listener)
            //         listener.add(key, this._parentFields._keys);
            // }
        }

        $has(key)
        {
            return this._fieldsList.has(key);
        }

    }},

    Var: { value:
    class Fields_Var {

        constructor(parentFields, listeners)
        {
            this._parentFields = parentFields;
            this._listeners = listeners;

            this.value = undefined;
        }

        $set(value)
        {
            this.value = value;

            for (let listener of this._listeners) {
                if ('set' in listener)
                    listener.set(value, this._parentFields._keys);
            }
        }

    }},

});

Object.defineProperties(Fields.List, {

    Iterator: { value:
    class Fields_List_Iterator {

        constructor(list)
        {
            this._list = list;
            this._keys = list._fieldsList.keys();
            this._index = 0;
            
            // this._iterator = list._fieldsList[Symbol.iterator]();
        }

        next()
        {
            if (this._index >= this._keys.length)
                return { value: undefined, done: true, };

            let key = this._keys[this._index];

            let result = {
                value: [ key, this._list.$getFields(key).root(), ],
                done: false,
            };

            this._index++;

            return result;
        }

    }},

});





 });