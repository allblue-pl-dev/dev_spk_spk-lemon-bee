jsLibs.exportModule('spk-forms', '$layouts/FileField', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class FileField extends spocky.Layout {

    constructor()
    {
        super([["div",{"class":["form-group {{field.divClass}} {{validator.divClass}}"]},["label",{"ab-show":["field.label"],"for":["{{field.name}}"],"class":["{{field.labelClass}}"]},"{{field.label}}"],["div",{"class":["{{field.fieldClass}}"]},["input",{"ab-elem":["field(field)"],"type":["file"],"id":["{{field.name}}"],"name":["{{field.name}}"],"class":["form-control"]}],["p",{"ab-show":["validator.hasErrors"],"ab-repeat":["validator.errors:error_message"],"class":["error"]},"{{error_message}}"]]]]);
    }

}


module.exports = FileField;




 });