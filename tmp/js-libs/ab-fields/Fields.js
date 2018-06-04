jsLibs.exportModule('ab-fields', 'Fields', (require, module) => { 'use strict';

const
    js0 = require('js0')
;

class Fields
{

    constructor(keys)
    {
        js0.args(arguments, Array);

        this._keys = keys;

        this._vars = {};
        this._objects = {};
        this._lists = {};

        this._root = {};
    }

    defList(fieldName, defsFn, listeners)
    {
        this._lists[fieldName] = new Fields.List(this, defsFn, listeners);
    }

    defObject(fieldName)
    {
        this._objects[fieldName] = {};
    }

    defVar(fieldName, listeners)
    {
        if (!(fieldName in this._vars))
            this._vars[fieldName] = new Fields.Var(this, listeners);

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

    getRoot()
    {
        return this._root;
    }

    getVar(fieldName)
    {
        if (!(fieldName in this._vars))
            throw new Error(`Fields var '${fieldName}' does not exist.`);

        return this._vars[fieldName];
    }

    getList(fieldName)
    {
        if (!(fieldName in this._lists))
            throw new Error(`Fields iterable '${fieldName}' does not exist.`);

        return this._lists[fieldName];
    }

    getObject(fieldName)
    {
        if (!(fieldName in this._objects))
            throw new Error(`Fields object '${fieldName}' does not exist.`);

        return this._objects[fieldName];
    }

    setObject(fieldName, value)
    {

    }

    setList(fieldName, value)
    {
        
    }

    setVar(fieldName, value)
    {
        if (!(fieldName in this._vars))
            throw new Error(`Fields var '${fieldName}' does not exist.`);

        this._vars[fieldName].$set(value);
    }

}
module.exports = Fields;


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

            this._fieldsList = new js0.List();
        }   

        $add(key)
        {
            let keys = this._parentFields._keys.slice();
            keys.push(key);

            let instanceFields = this._fieldDefinition.createFields(keys);

            this._fieldsList.set(key, instanceFields);

            for (let listener of this._listeners) {
                if ('add' in listener)
                    listener.add(key, this._parentFields._keys);
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

        $push()
        {
            let key = this.$size;
            while (this.$has(key))
                key++;

            this.$add(key);
        }

        $remove(key)
        {
            this._fieldsList.remove(key);

            if ('remove' in this._listeners)
                this._listeners.set(key, this._parentFields._keys);
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





 });