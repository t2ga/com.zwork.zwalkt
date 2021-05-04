sap.ui.define([
    "com/zwork/zwalkt/controller/BaseController",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("com.zwork.zwalkt.controller.MainView", {
        onInit: function() {
            //set data model on view
            // var oData = {
            //     recipient: {
            //         name: "",
            //         placeholder: "Enter Name"
            //     },
            //     HTML: "<h3>Hello world!</h3>" + "<br>"
            // };
            // var oModel = new JSONModel(oData);
            // this.getView().setModel(oModel);
            // //set i18n model on view
            // // var i18nModel = new ResourceModel({bundleName: "com.zwork.zwalkt.i18n.i18n"});

        },

        onOpenDialog : function() {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});
