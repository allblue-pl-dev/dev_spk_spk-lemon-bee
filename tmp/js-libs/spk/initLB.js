jsLibs.exportModule('spk', 'initLB', (require, module) => { 'use strict';

const
    eText = require('./eText'),
    spkLemonBee = require('spk-lemon-bee')
;

function initLB(pager) {
    let lb = new spkLemonBee.System(pager);

    lb.setUris({
        main: '',
        logIn: 'log-in',
    });

    lb.addPanel({
        name: 'articles',
        permissions: 'Sys_Articles',
    
        uri: 'articles',
        title: 'Articles',
        image: '/',
        
        subpanels: [
            {
                name: 'list',
                module: require('./articles').List,
                uri: eText.get('uris_List'),
                title: eText.get('titles_List'),
                faIcon: 'fa-file',
                image: '/',
            }, {
                name: 'add',
                module: require('./articles').Add,
                uri: eText.get('uris_List'),
                title: eText.get('titles_List'),
                faIcon: 'fa-file',
                image: '/',
            },
        ],
    });

    lb.init();

    return lb;
}



module.exports = initLB;




 });