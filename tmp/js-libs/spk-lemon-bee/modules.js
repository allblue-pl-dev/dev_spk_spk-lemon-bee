jsLibs.exportModule('spk-lemon-bee', 'modules', (require, module) => { 'use strict';

const
    js0 = require('js0'),
    spocky = require('spocky'),

    spkLemonBee = require('.'),

    $layouts = require('./$layouts')
;


class Main extends spocky.Module {

    constructor(system)
    { super();
        js0.args(arguments, spkLemonBee.System);

        let layout = new $layouts.Main();
        console.log(system.panels);
        layout.$fields.panels = system.panels;

        this.$view = layout;
    }

}

class LogIn extends spocky.Module {

    constructor()
    { super();
        this.$view = new $layouts.LogIn();
    }

}

class Panel extends spocky.Module {

    constructor(system, panelName)
    { super();
        this.$view = new $layouts.Panel();
    }

}





module.exports.Main = Main;
module.exports.LogIn = LogIn;
module.exports.Panel = Panel;
 });