jsLibs.exportModule('spk-lemon-bee', 'layouts/index', (require, module) => { 'use strict';

const Body = require('./Body');
const LogIn = require('./LogIn');
const Main = require('./Main');
const Panel = require('./Panel');






module.exports.Body = Body;
module.exports.LogIn = LogIn;
module.exports.Main = Main;
module.exports.Panel = Panel;
 });