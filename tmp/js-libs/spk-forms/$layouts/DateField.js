jsLibs.exportModule('spk-forms', '$layouts/DateField', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class DateField extends spocky.Layout {

    constructor()
    {
        super([["div",{"class":["form-group {{field.divClass}} {{validator.divClass}}"]},["label",{"ab-show":["field.label"],"for":["{{field.name}}"],"class":["{{field.labelClass}}"]},"{{field.label}}"],["div",{"class":["{{field.fieldClass}}"]},["div",{"class":["input-group"]},["input",{"ab-elem":["field(field)"],"type":["text"],"id":["{{field.id}}"],"name":["{{field.name}}"],"class":["form-control datetimepicker"],"placeholder":["{{field.placeholder}}"]}],["span",{"class":["input-group-addon"]},["span",{"ab-elem":["calendar"],"class":["fa fa-calendar"]}]]],["p",{"ab-show":["validator.hasErrors"],"ab-repeat":["validator.errors:error_message"],"class":["error"]},"{{error_message}}"]]]]);
    }

}


module.exports = DateField;




 });