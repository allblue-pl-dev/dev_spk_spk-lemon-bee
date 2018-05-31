jsLibs.exportModule('site', 'eText', (require, module) => { 'use strict';


function get(text) {
    return `#${text}#`;
}





module.exports.get = get;
 });