jsLibs.exportModule('site', '$layouts/Eval', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class Eval extends spocky.Layout {

    constructor()
    {
        super([["p",{"class":["$var","images/"]}],"$test('Something')"]);
    }

}


module.exports = Eval;




 });