sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function() {
            //show a native JavaScript alert
            // alert("Hello World!");
            var greeting = this
            .getView()
            .getModel("i18n")
            .getResourceBundle()
            .getText("greeting");
            // MessageToast.show(greeting); //("{i18n>greeting}"); //"greeting=Hello World!"
            //read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient, greeting]);
            //show message
            MessageToast.show(sMsg);
        }
    });
 });