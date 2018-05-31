jsLibs.exportModule('site', 'layouts/index', (require, module) => { 'use strict';

const LogIn = require('./LogIn');
const Main = require('./Main');
const Panel = require('./Panel');






module.exports.LogIn = LogIn;
module.exports.Main = Main;
module.exports.Panel = Panel;
 });