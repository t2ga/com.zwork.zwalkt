sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.zwork.zwalkt.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.zwork.zwalkt",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
