jsLibs.exportModule('web-ab-messages', 'Messages', (require, module) => { 'use strict';

const
    $layouts = require('./$layouts')
;

class Messages
{




    constructor(images)
    {
        js0.args(arguments, js0.Preset({
            loading: 'string',
            success: 'string',
            failure: 'string',
        }));

        this._images = images;

        this._l = new $layouts.Messages();
        this._f.$fields.loading.image = this._images.loading;
        this.hideConfirmation();
        this.hideLoading();
        this.hideMsg();

        this._msg_Fn = null;
        this._confirmation_Fn = null;

        this._createElems();

        this.$view = this.l;
    }

    hideConfirmation(result)
    {
        this.l_.$fields.confirmation = {
            show: false,
            text: '',
            yes: '',
            no: '',
        };

        this._confirmation_Fn(result);
        this._confirmation_Fn = null;
    }

    hideLoading()
    {
        this.l_.$fields.loading = {
            show: false,
            text: '',
        };
    }

    hideMsg()
    {
        this.l_.$fields.msg = {
            show: false,
            image: '',
            text: '',
        };

        if (this._msg_Fn !== null) {
            this._msg_Fn();
            this._msg_Fn = null;
        }
    }

    showConfirmation(text, yesText, noText, fn)
    {
        this._confirmation_Fn = fn;

        this._l.$fields.confirmation.set({
            text: text,
            yes: yesText,
            no: noText,
            show: true
        });
    }

    showLoading(text)
    {
        this._l.$fields.loading.set({
            text: text,
            show: true,
        });
    }

    showMsg(imageSrc, text, fn = null)
    {
        js0.args(arguments, 'string', 'string', [ js0.Default, 'function' ]);

        this._msg_Fn = fn;
        this._enabled = false;

        this._l.$fields.message.set({
            image: imageSrc,
            text: text,
            show: true
        });
    }

    showMsg_Failure(text, fn = null)
    {
        js0.args(arguments, 'string', [ js0.Default, 'function' ]);

        this.showMsg(this._images.failure, text, fn);
    }

    showMsg_Success(text, fn = null)
    {
        js0.args(arguments, 'string', [ js0.Default, 'function' ]);

        this.showMsg(this._images.success, text, fn);
    }


    _createElems()
    {
        this._l.$elems.notification.addEventListener('click', (evt) => {
            evt.preventDefault();
            this.hide();
        });

        this._l.$elems.yes.addEventListener('click', (evt) => {
            evt.preventDefault();

            this.hideConfirmation(true);
        });

        this._l.$elems.no.addEventListener('click', (evt) => {
            evt.preventDefault();
            this.hideConfirmation(false);
        });
    }

};


module.exports = Messages;




 });