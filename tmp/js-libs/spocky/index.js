jsLibs.exportModule('spocky', 'index', (require, module) => { 'use strict';

const
    js0 = require('js0')
;

const Ext = require('./Ext');
const Layout = require('./Layout');
const Module = require('./Module');
const Site = require('./Site');


const exts = [];

function ext(spockyExt) {
    js0.args(arguments, Ext);

    Layout.Parser.extend((nodeElement) => {
        spockyExt.onParseNodeElement(nodeElement);
    });
}


const Debug = false;
function setDebug(debug) {
    module.exports.Debug = debug;
    abFields.setDebug(debug);
};





module.exports.Ext = Ext;
module.exports.Layout = Layout;
module.exports.Module = Module;
module.exports.Site = Site;
module.exports.ext = ext;
module.exports.Debug = Debug;
module.exports.setDebug = setDebug;
 });