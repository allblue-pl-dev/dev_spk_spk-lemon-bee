jsLibs.exportModule('spk-lemon-bee', 'Body', (require, module) => { 'use strict';

const
    js0 = require('js0'),
    spocky = require('spocky'),

    $layouts = require('./$layouts')
;

class Body extends spocky.Module
{

    constructor(system)
    { super();
        js0.args(arguments, require('./System'));

        this.system = system;

        let l = new $layouts.Body();

        l.$fields.lb = system.getFields();
        l.$fields.layoutType_Panel = true;

        l.$holders.topMenu.$view = this._getMenuLayout();
        l.$holders.userInfo.$view = this._getUserInfoLayout();

        this.layout = l;

        this.$view = l;
    }

    setContent(content)
    {
        js0.args(arguments, [ spocky.Layout, spocky.Module ]);

        this.layout.$holders.content = content;
    }


    _getMenuLayout()
    {
        let l = new $layouts.TopMenu();

        let items = [];
        for (let [ panelName, panel ] of this.system.panels) {
            items.push({
                uri: this.system.uris.base + panel.uri,
                title: panel.title,
            });
        }
        l.$fields.menuItems = items;

        return l;
    }

    _getUserInfoLayout()
    {
        let l = new $layouts.UserInfo();

        l.$fields.lb = this.system.getFields();
        l.$fields.login = 'Test';

        return l;
    }

}

module.exports = Body;




 });