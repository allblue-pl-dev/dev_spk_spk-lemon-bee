'use strict';

const abWeb = require('ab-web');

abWeb.exec({
    _config: {
        front: `../tmp/ab-web`,
        back: `../cache/abWeb`,
        index: '..',
        base: '/',
    },

    init: [ `./ab-web.js` ],
    exts: [ 'header', 'sass', 'js', 'js-libs', 'spocky' ],
});