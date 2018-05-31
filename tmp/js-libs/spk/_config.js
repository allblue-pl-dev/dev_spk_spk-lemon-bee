jsLibs.exportModule('spk', '_config', (require, module) => { 'use strict';

const
    site = require('.')
;


site.spk.config(($cfg) => {
    $cfg
        .container('site', site.Site);
});





 });