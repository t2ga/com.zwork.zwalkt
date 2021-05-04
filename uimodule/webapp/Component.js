sap.ui.define([
    "sap/ui/core/UIComponent", 
    "sap/ui/Device", 
    "com/zwork/zwalkt/model/models",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"
], function (UIComponent, Device, models, JSONModel, HelloDialog) {
        "use strict";

        return UIComponent.extend("com.zwork.zwalkt.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                var oData = {
                    recipient: {
                        name: "",
                        placeholder: "{i18n>homePageTitle}"//"Enter Name"
                    },
                    HTML: "<h3>Hello world!</h3>" + "<br>"
                };

                var oModel = new JSONModel(oData);
                this.setModel(oModel);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                //set dialog
                this._helloDialog = new HelloDialog(this.getRootControl());
            },

            exit : function() {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog : function() {
                this._helloDialog.open();
            }
        });
    }
);
