jsLibs.exportModule('site', 'initLB', (require, module) => { 'use strict';

const
    eText = require('./eText').get,
    spkLemonBee = require('spk-lemon-bee')
;

function initLB(pager) {
    let lb = new spkLemonBee.System(pager);
    
    lb.setup({
        aliases: {
            main: '',
            logIn: 'log-in',        
        },
        images: {
            logo: '/dev/node_modules/spk-lemon-bee/images/logo.png',

            msgs: {
                loading: '/dev/node_modules/spk-lemon-bee/images/msgs/loading.png',
                success: '/dev/node_modules/spk-lemon-bee/images/msgs/success.png',
                failure: '/dev/node_modules/spk-lemon-bee/images/msgs/failure.png',
            },
        },
        panels: [
            {
                name: 'articles',
                permissions: [ 'Sys_Articles' ],
            
                alias: 'articles',
                title: 'Articles',
                image: '/',
                
                subpanels: [
                    {
                        name: 'list',
                        module: require('./articles').List,
                        alias: 'list',
                        title: 'List',
                        faIcon: 'fa-file',
                        image: '/',
                    }, {
                        name: 'add',
                        module: require('./articles').Add,
                        alias: 'add',
                        title: 'Add',
                        faIcon: 'fa-file',
                        image: '/',
                    },
                ],
            },
        ],
        texts: {},
        uris: {
            api: '/api/v1/user/log-in',
        },
        user: {
            loggedIn: true,
            login: 'test@allblue.pl',
            permissions: [ 'Sys_Articles' ],
        }
    });

    lb.init();

    return lb;
}



module.exports = initLB;




 });