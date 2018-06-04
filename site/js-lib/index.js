'use strict';

const 
    abPager = require('ab-pager'),
    js0 = require('js0'),
    spkABForms = require('spk-forms'),
    spocky = require('spocky'),

    initLB = require('./initLB')
;


spocky.ext(new spkABForms.Ext());

export const spk = new spocky.Site()
    .config(($app, $cfg) => {
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