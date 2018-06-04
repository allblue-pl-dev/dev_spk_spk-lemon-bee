jsLibs.exportModule('site', 'index', (require, module) => { 'use strict';

const 
    abPager = require('ab-pager'),
    js0 = require('js0'),
    spkABForms = require('spk-forms'),
    spocky = require('spocky'),

    initLB = require('./initLB')
;


spocky.ext(new spkABForms.Ext());

const spk = new spocky.Site()
    .config(($app, $cfg) => {
        $cfg
            .container('site', Site);
    });

const $layouts = require('./$layouts');

class Site extends spocky.Module {

    constructor() {
        super();

        this.pager = new abPager.Pager();
        this.lb = initLB(this.pager);
        
        // this.sys = new Sys(pager, lb);

        this.pager.init();

        this.$view = this.lb.module;
    }

}





module.exports.spk = spk;
module.exports.$layouts = $layouts;
module.exports.Site = Site;
 });