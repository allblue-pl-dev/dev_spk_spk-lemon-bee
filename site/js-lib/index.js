'use strict';

const 
    abPager = require('ab-pager'),
    js0 = require('js0'),
    spocky = require('spocky'),

    initLB = require('./initLB')
;


export const spk = new spocky.Site();
spk.config(($app, $cfg) => {
    $cfg
        .container('site', Site);
});

export const $layouts = require('./$layouts');

export class Site extends spocky.Module {

    constructor() {
        super();

        this.pager = new abPager.Pager();
        this.lb = initLB(this.pager);
        
        // this.sys = new Sys(pager, lb);

        this.pager.init();

        this.$view = this.lb.module;
    }

}