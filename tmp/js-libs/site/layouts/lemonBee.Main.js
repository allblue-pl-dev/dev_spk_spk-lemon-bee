jsLibs.exportModule('site', 'layouts/lemonBee.Main', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class lemonBee.Main extends spocky.Layout {

    constructor()
    {
        super([["div",{"class":["lb-header"]}],["div",{"class":["lb-menu-main mg-spacer-top-s row"]},["_",{"_repeat":["panels"]},["div",{"class":["col-lg-3 col-sm-6 mg-spacer-bottom-s {{class}}"]},["h1",{},["a",{"class":["btn btn-default mg-full"],"href":["{{uri}}"]},["img",{"_show":["image"],"src":["{{image}}"],"alt":["{{title}}"]}],"{{title}}"]]]]],["div",{"class":["mg-clear"]}]]);
    }

}


module.exports = lemonBee;




 });