jsLibs.exportModule('site', '_app', (require, module) => { 'use strict';

const
    site = require('.')
;


site.spk.app(($app) => {    
    console.log('Initializing app.');
});





 });