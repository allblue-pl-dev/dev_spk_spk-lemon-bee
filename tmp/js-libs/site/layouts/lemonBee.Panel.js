jsLibs.exportModule('site', 'layouts/lemonBee.Panel', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class lemonBee.Panel extends spocky.Layout {

    constructor()
    {
        super([]);
    }

}


module.exports = lemonBee;




 });