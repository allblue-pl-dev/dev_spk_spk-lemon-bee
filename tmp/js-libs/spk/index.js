jsLibs.exportModule('spk', 'index', (require, module) => { 'use strict';

const 
    abPager = require('ab-pager'),
    js0 = require('js0'),
    // spkLemonBee = require('spkLemonBee'),
    spocky = require('spocky'),

    // initLB = require('./initLB')
;


const spk = new spocky.Site();
spk.config(($app, $cfg) => {
    console.log($app, $cfg);
    $cfg
        .container('site', Site);
});

const layouts = require('./layouts');

class Site extends spocky.Module {

    constructor() {
        super();

        this.$view = new spocky.Layout([
            [ 'h1', 'Hello World' ],
        ]);

        // this.pager = new abPager.Pager();
        // this.lb = initLB(this.pager);
        // // this.sys = new Sys(pager, lb);

        // this.pager.init();

        // this.$view = this.lb.module;
    }

}





module.exports.spk = spk;
module.exports.layouts = layouts;
module.exports.Site = Site;
 });