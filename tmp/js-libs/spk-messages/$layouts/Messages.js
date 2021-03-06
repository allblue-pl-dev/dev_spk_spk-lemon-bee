jsLibs.exportModule('spk-messages', '$layouts/Messages', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class Messages extends spocky.Layout {

    constructor()
    {
        super(["Test",["div",{"_show":["message.show"],"_elem":["message"],"class":["abn_message_holder"]},["div",{"class":["abn_message_placer"]},["div",{"class":["abn_message_content"]},["img",{"_show":["message.image"],"src":["$message.image"],"class":[]}],["div",{"class":["mg-clear"]}],["div",{"class":[]},["p",{},"$message.text"]]]]],"Here:",["div",{"_show":["loading.show"],"class":["abn_message_holder"]},["h1",{},"Loading!"],["div",{"class":["abn_message_placer"]},["div",{"class":["abn_message_content"]},["img",{"class":["img-responsive"],"src":["$loading.image"]}],["div",{"class":["mg-clear"]}],["div",{"class":[]},["p",{},"$loading.text"]]]]],["div",{"_show":["confirmation.show"],"class":["abn_message_holder"]},["div",{"class":["abn_message_placer"]},["div",{"class":["abn_message_content abn_message_background"]},["p",{"class":["lead text-center"]},"$confirmation.text"],["div",{"class":["mg-clear mg-spacer-bottom-s"]}],["div",{"class":["col-sm-6 mg-spacer-bottom-s text-center"]},["a",{"_elem":["yes"],"class":["btn btn-success mg-full"]},["i",{"class":["fa fa-check"]}],"$confirmation.yes"]],["div",{"class":["col-sm-6 mg-spacer-bottom-s text-center"]},["a",{"_elem":["no"],"class":["btn btn-primary mg-full error"]},["i",{"class":["fa fa-times"]}],"$confirmation.no"]]]]]]);
    }

}


module.exports = Messages;




 });