jsLibs.exportModule('ab-fields', 'index', (require, module) => { 'use strict';

class abFields_Class
{

    get FieldDefinitions() {
        return require('./FieldDefinitions');
    }


    define()
    {
        return new this.FieldDefinitions();
    }

}
module.exports = new abFields_Class();





 });