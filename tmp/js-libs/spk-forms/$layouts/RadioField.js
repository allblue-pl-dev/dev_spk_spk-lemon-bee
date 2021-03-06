jsLibs.exportModule('spk-forms', '$layouts/RadioField', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class RadioField extends spocky.Layout {

    constructor()
    {
        super([["div",{"class":["form-group {{field.divClass}} {{validator.divClass}}"]},["label",{"ab-show":["field.label"],"class":["{{field.labelClass}}"]},"{{field.label}}"],["div",{"class":["{{field.fieldClass}}"]},["div",{"ab-repeat":["field.options:option"]},["input",{"ab-elem":["field(field)"],"type":["radio"],"id":["{{field.name}}_{{option.value}}"],"name":["{{field.name}}"],"value":["{{option.value}}"]}],["label",{"for":["{{field.name}}_{{option.value}}"]}," {{option.title}}"]],["p",{"ab-show":["validator.hasErrors"],"ab-repeat":["validator.errors:error_message"],"class":["error"]},"{{error_message}}"]]]]);
    }

}


module.exports = RadioField;




 });