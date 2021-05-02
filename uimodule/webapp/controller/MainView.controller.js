sap.ui.define([
    "com/zwork/zwalkt/controller/BaseController",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.zwork.zwalkt.controller.MainView", {
        onShowHello: function() {
            //show a native JavaScript alert
            // alert("Hello World!");
            var greeting = this
            .getView()
            .getModel("i18n")
            .getResourceBundle()
            .getText("greeting");
            MessageToast.show(greeting); //("{i18n>greeting}"); //"greeting=Hello World!"
        }
    });
});
