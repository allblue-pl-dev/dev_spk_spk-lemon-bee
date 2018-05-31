jsLibs.exportModule('spk', 'site', (require, module) => { 'use strict';

spocky.package('site', ($pkg) => {

const lemonBee = $pkg.import('lemonBee');


$pkg.export( 
class Site extends spocky.Module
{

    constructor()
    {
        this.lb = this.createLB();

        this.$view = this.lb.getModule_Main;
    }

    _createLB()
    {
        let lb = new lemonBee.LemonBee();

        lb.
    }

});


$pkg.export( 
class Main extends spocky.Module
{

    constructor()
    {
        this.lbMain = new lemonBee.Main();
    }

});

});





 });