jsLibs.exportModule('spk-lemon-bee', 'layouts/Main', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class Main extends spocky.Layout {

    constructor()
    {
        super([["h1",{},"Main Panel"],["div",{"class":["lb-header"]},["h2",{},["img",{"ab-show":["image"],"alt":["title"],"src":["{{image}}"]}],["i",{"ab-hide":["image"],"class":["fa {{faIcon}}"]}],"${eText('title')}: ","$title",["br",{}],["span",{"_show":["show"]},"SHOW"]]],["div",{"class":["lb-menu-main mg-spacer-top-s row"]},["div",{"_repeat":["panels:p"],"class":["col-lg-3 col-sm-6 mg-spacer-bottom-s ","$class"]},["h1",{},"Main title: ","$title",["span",{"_show":["p.show"]},"Show"],["a",{"class":["btn btn-default mg-full"],"href":["$p.uri"]},["img",{"_show":["p.image"],"src":["$p.image"],"alt":["$p.title"]}],"$p.innerTitle"]]]],["div",{"class":["mg-clear"]}]]);
    }

}


module.exports = Main;




 });