jsLibs.exportModule('spk', 'articles', (require, module) => { 'use strict';

const
    spocky = require('spocky'),


    sys = require('./sys')
;


class List extends spocky.Module {

    constructor() { 
        super();
        
        this.$view = new site.layouts.articles_List();
        
        // this.bCreate = new sys.Button({
        //     type: 'panel',
        //     text: 'Test',
        //     faIcon: 'fa-plus',
        //     href: sys.lb.getSubpanelUri('articles', 'create'),
        // });
        
        // this.mTable = new abTables.Table(sys.notifications, {
            
        // });
    }

}


class Add extends spocky.Module {

    constructor() { 
        super();

        this.$view = new site.layouts.articles_Add();
    }

}





module.exports.List = List;
module.exports.Add = Add;
 });