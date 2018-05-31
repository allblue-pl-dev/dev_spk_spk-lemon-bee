'use strict';


spocky.config(($cfg) => {
    $cfg
        .base('/')

        .page('home', '')
        .page('logIn', 'log-in')

        .page('panel1', 'panels/first')
        .page('panel2', 'panels/second')

        .container('site', new Map([
            [ '', 'site.Site' ],
        ]));
});