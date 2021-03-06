jsLibs.exportModule('spk-lemon-bee', 'System', (require, module) => { 'use strict';

const
    abPager = require('ab-pager'),
    js0 = require('js0'),
    spkMessages = require('spk-messages'),
    spocky = require('spocky'),

    $layouts = require('./$layouts'),
    modules = require('./modules')
;

class System
{

    get module() {
        if (!this._initialized)
            throw new Error('LemonBee system not initialized.');

        return this._module;
    }

    get panels() {
        if (!this._initialized)
            throw new Error('LemonBee system not initialized.');

        return this._panels;
    }

    get uris() {
        if (!this._initialized)
            throw new Error('LemonBee system not initialized.');

        return this._uris;
    }


    constructor(pager)
    {
        js0.args(arguments, abPager.Pager)

        this._initialized = false;

        /* Presets */
        this._aliases = {
            main: '',
            logIn: 'log-in',
        };
        this._images = {};
        this._texts = {};
        this._uris = {
            base: '/',
        };
        this._user = {
            loggedIn: false,
            permissions: [],
            login: '',
        };
        /* / Presets */

        this._panels = new Map();
        this._module = new spocky.Module();
        this._module_Layout = new spocky.Layout([
            [ '$', { _holder: 'content', } ],
            [ 'div', { _holder: 'msgs', } ],
        ]);
        this._module.$view = this._module_Layout;
        
        this.pager = pager;
        this.msgs = null;
    }

    createLayout(layoutClass)
    {
        let l = new layoutClass();
        l.$fields.lb = this.getFields();

        return l;
    }

    getFields()
    {
        return {
            images: this._images,
            text: (text) => {
                return this.text(text);
            },
            uris: this._uris,
        };
    }

    getPanels()
    {
        let allowedPanels = [];
        for (let [ panelName, panel ] of this._panels) {
            let allowed = true;
            for (let permission of panel.permissions) {
                if (!this._user.permissions.includes(permission)) {
                    allowed = false;
                    break;
                }
            }

            if (!allowed)
                continue;
                
            allowedPanels.push(panel);
        }

        return allowedPanels;
    }

    setup(presets)
    {
        js0.args(arguments, js0.Preset({
            aliases: {
                main: 'string',
                logIn: 'string',
            },
            images: {
                logo: 'string',
                msgs: js0.Preset({
                    loading: 'string',
                    success: 'string',
                    failure: 'string',
                }),
            },
            panels: js0.PresetArray({
                permissions: [ js0.Default([]), Array ],
    
                name: 'string',
                alias: 'string',
                title: 'string',
                faIcon: [ js0.Default(null), 'string' ],
                image: [ js0.Default(null), 'string' ],
                
                subpanels: js0.PresetArray({
                    name: 'string',
                    module: 'function',
    
                    permissions: [ js0.Default([]), Array ],
    
                    alias: 'string',
                    title: 'string',
                    faIcon: [ js0.Default(null), 'string' ],
                    image: [ js0.Default(null), 'string' ],     
                }),
            }),
            texts: 'object',
            uris: js0.Preset({
                base: [ 'string', js0.Default('/') ],
                api: [ 'string' ],
            }),
            user: js0.Preset({
                loggedIn: 'boolean',                
                login: 'string',
                permissions: Array,
            }),
        }));

        this._aliases = presets.aliases;
        this._images = presets.images;
        this._texts = presets.texts;
        for (let panel of presets.panels)
            this._addPanel(panel);
        this._uris = presets.uris;
        this._user = presets.user;

        this.msgs = new spkMessages.Messages(this._images.msgs);
        
        this._module_Layout.$holders.msgs.$view = this.msgs;
    }

    init()
    {
        this.pager.page('main', this._aliases.main, () => {
            if (!this._user.loggedIn) {
                window.location = this._uris.base + this._aliases.logIn;
                return;
            }

            let body = new modules.Body(this);
            body.setContent(new modules.Main(this, this._panels));

            this._module_Layout.$holders.content.$view = body;
        });
        this.pager.page('logIn', this._aliases.logIn, () => {
            this._module_Layout.$holders.content.$view = new modules.LogIn(this);
        });

        // for (let panel of this.panels) {
        //     for (let subpanel of panel.subpanels) {
        //         this.pager.page(panel.name, panel.uri + '/' + subpanel.uri, 
        //                 () => {
        //             this.module.$view = null;
        //         });
        //     }
        // }

        this._initialized = true;
    }

    text(text)
    {
        if (text in this._texts)
        return this._texts[text];

        return `#${text}#`;
    }


    _addPanel(panel)
    {
        let pPanel = {};
        for (let pKey in panel) {
            if (pKey === 'subpanels') {
                pPanel.subpanels = new Map();
                for (let subpanel of panel.subpanels) {
                    let pSubpanel = {};
                    for (let sKey in subpanel)
                        pSubpanel[sKey] = subpanel[sKey];

                        pPanel.subpanels.set(subpanel.name, pSubpanel);
                }
            } else
                pPanel[pKey] = panel[pKey];
        }

        this._panels.set(panel.name, pPanel);
    }

}

module.exports = System;




 });