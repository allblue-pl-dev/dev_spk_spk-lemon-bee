jsLibs.exportModule('spk-forms', '$layouts/HiddenField', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class HiddenField extends spocky.Layout {

    constructor()
    {
        super([["input",{"ab-elem":["field(field)"],"type":["hidden"],"id":["{{field.name}}"],"name":["{{field.name}}"],"class":["form-control"],"placeholder":["{{field.placeholder}}"]}]]);
    }

}


module.exports = HiddenField;




 });