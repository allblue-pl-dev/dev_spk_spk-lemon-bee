jsLibs.exportModule('spocky', 'core_old/LayoutInfo', (require, module) => { 'use strict';

const abFields = require('../ab-fields');


class LayoutInfo
{

    constructor()
    {
        this.fields = new abFields.ObjectField();
    }

}
module.exports = LayoutInfo;






 });