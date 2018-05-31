jsLibs.exportModule('spk-lemon-bee', 'modules/Panel', (require, module) => { 'use strict';

const
    spocky = require('spocky'),

    $layouts = require('../$layouts')
;

class Panel extends spocky.Module
{

    constructor(system, panel)
    { super();
        js0.args(arguments, require('../System'), 'object');

        let l = system.createLayout($layouts.Panel);
        l.$fields.panel = panel;

        this.$view = l;
    }

}

module.exports = Panel;




 });