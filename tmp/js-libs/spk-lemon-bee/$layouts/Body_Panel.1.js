jsLibs.exportModule('spk-lemon-bee', '$layouts/Body_Panel.1', (require, module) => { 'use strict';

const
    spocky = require('spocky')
;

class Body_Panel.1 extends spocky.Layout {

    constructor()
    {
        super([["_",{"_show":["layoutType_Panel"]},["div",{"class":["lb-content ","$panelClass"]},["div",{"class":["col-lg-2 col-sm-3 mg-absolute lb-bg-white"],"style":["top:0;bottom:0;left:0;right:0;"]}],["div",{"class":["mg-relative lb-topbar"]},["div",{"class":["col-lg-2 col-sm-3 mg-bg-white"]},["div",{"class":["lb-logo"]},["a",{"href":["$lb.uris.base"]},["img",{"src":["$lb.images.logo"],"alt":["logo"]}]]]],["div",{"class":["col-lg-10 col-sm-9 bg-primary"]},["_",{"_holder":["userInfo"]}]],["div",{"class":["mg-clear"]}]],["div",{"class":["col-lg-2 col-sm-3 mg-no-padding-horizontal"]},["_",{"_holder":["topMenu"]}]],["div",{"class":["col-lg-10 col-sm-9 lb-bg-gray-lightest"],"style":["min-height: 800px;"]},["_",{"_holder":["panel_Content"]}],["div",{"class":["backToTop mg-spacer-top"]},["hr",{}],["a",{"id":["backToTop"],"class":["spScrollToTop lb-back-to-top btn btn-default"],"href":[]},"$lb.text('backToTop')",["i",{"class":["fa fa-chevron-up"]}]]]],["div",{"class":["mg-clear"]}],["div",{"class":["lb-povered-by pull-right bg-primary"]},"Powered by",["a",{"href":["http://allblue.pl"]},"AllBlue"]]]],["_",{"_show":["layoutType_LogIn"]},["h1",{},"Log In Panel"],["div",{"class":["mg-fill-screen lb-background-login"]}],["div",{"class":["magda-holder"]},["div",{"class":["col-lg-5 col-sm-6 col-sm-8 lb-login"]},["div",{"class":["lb-login-content"]},["div",{"class":["lb-login-logo col-sm-5 col-sm-5 "]},["img",{"src":["$lb.uris.base","images/logo.png"]}],["div",{"class":["mg-clear"]}]],["div",{"class":["lb-login-form col-sm-7 col-sm-7"]},["h3",{},"$eText('LemonBee:sys.texts_logInMessage')"],["_",{"_holder":["logIn_Content"]}]],["div",{"class":["mg-clear"]}]],["div",{"class":["lb-povered-by"]},"Powered by",["a",{"href":["https://allblue.pl"],"class":["text-primary"]},"AllBlue"]]]]]]);
    }

}


module.exports = Body_Panel;




 });