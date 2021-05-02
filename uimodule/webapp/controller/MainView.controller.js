sap.ui.define(["com/zwork/zwalkt/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("com.zwork.zwalkt.controller.MainView", {
        onShowHello: function() {
            //show a native JavaScript alert
            alert("Hello World!");
        }
    });
});
