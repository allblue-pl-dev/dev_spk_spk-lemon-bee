jsLibs.exportModule('site', '$layouts/Panel', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class Panel extends spocky.Layout {

    constructor()
    {
        super([]);
    }

}


module.exports = Panel;




 });