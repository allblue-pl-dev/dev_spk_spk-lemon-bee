jsLibs.exportModule('spk', 'lemonBee/index', (require, module) => { 'use strict';

spocky.package('lemonBee', ($app, $pkg) => {

    $pkg.export( 
    class Main extends spocky.Module {

        constructor()
        {
            let panels = [
                {
                    uri: 
                    class: '',
                }
            ];

            this.lMain = $pkg.layout(this.$name);
            this.lMain.$fields.panels = panels;
        }

    });

});
class lemonBee_Package extends spocky.Package
{

    get Main() {
        return require('./Main');
    }

    get Panel() {
        return require('./Panel');
    }


    constructor()
    {
        this
            .module('Main', require('./Main'))
            .module('Panel', require('./Panel'));
    }

}
module.exports = lemonBee_Package;





 });