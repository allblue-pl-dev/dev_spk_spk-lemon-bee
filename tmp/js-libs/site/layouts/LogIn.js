jsLibs.exportModule('site', 'layouts/LogIn', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class LogIn extends spocky.Layout {

    constructor()
    {
        super([]);
    }

}


module.exports = LogIn;




 });