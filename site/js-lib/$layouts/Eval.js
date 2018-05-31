'use strict';

const
    spocky = require('spocky')
;

export default class Eval extends spocky.Layout {

    constructor()
    {
        super([["p",{"class":["$var","images/"]}],"$test('Something')"]);
    }

}
