// Custom controls are small reuse components that can be created within the app very easily. Due to their nature, they are sometimes also referred to as "notepad” or “on the fly” controls. A custom control is a JavaScript object that has two special sections (metadata and renderer) and a number of methods that implement the functionality of the control.
// https://sapui5.hana.ondemand.com/#/topic/d12d2ee6a5454d799358d425f9e7c4db
sap.ui.define([
	"sap/ui/core/Control",
    "sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"
], function (Control, RatingIndicator, Label, Button) {
	"use strict";
	return Control.extend("com.zwork.zwalkt.control.ProductRating", {
		metadata : {
			properties : {
                // We define a control property value that will hold the value that the user selected
                //  in the rating. Getter and setter function for this property will automatically be
                //  created and we can also bind it to a field of the data model in the XML view if we like.
				value: 	{type : "float", defaultValue : 0}
			},
			aggregations : {
				_rating : {
                    type : "sap.m.RatingIndicator", 
                    multiple: false, 
                    visibility : "hidden"
                },
				_label : {
                    type : "sap.m.Label", 
                    multiple: false, 
                    visibility : "hidden"
                },
				_button : {
                    type : "sap.m.Button", 
                    multiple: false, 
                    visibility : "hidden"
                }
			},
			events : {
				change : {
					parameters : {
						value : {type : "int"}
					}
				}
			}            
		},
		init : function () {
			this.setAggregation("_rating", new RatingIndicator({
				value: this.getValue(),
				iconSize: "2rem",
				visualMode: "Half",
				liveChange: this._onRate.bind(this)
			}));

			this.setAggregation("_label", new Label({
				text: "{i18n>productRatingLabelInitial}"
			}).addStyleClass("sapUiSmallMargin"));

			this.setAggregation("_button", new Button({
				text: "{i18n>productRatingButton}",
				press: this._onSubmit.bind(this)
			}).addStyleClass("sapUiTinyMarginTopBottom"));            
		},

		setValue: function (fValue) {
			this.setProperty("value", fValue, true);
			this.getAggregation("_rating").setValue(fValue);
		},

		reset: function () {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();

			this.setValue(0);
			this.getAggregation("_label").setDesign("Standard");
			this.getAggregation("_rating").setEnabled(true);
			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelInitial"));
			this.getAggregation("_button").setEnabled(true);
		},

		_onRate : function (oEvent) {
			var oRessourceBundle = this.getModel("i18n").getResourceBundle();
			var fValue = oEvent.getParameter("value");

			this.setProperty("value", fValue, true);

			this.getAggregation("_label").setText(oRessourceBundle.getText("productRatingLabelIndicator", [fValue, oEvent.getSource().getMaxValue()]));
			this.getAggregation("_label").setDesign("Bold");
		},

		_onSubmit : function (oEvent) {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();

			this.getAggregation("_rating").setEnabled(false);
			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
			this.getAggregation("_button").setEnabled(false);
			this.fireEvent("change", {
				value: this.getValue()
			});
		},

		renderer : function (oRm, oControl) {
			oRm.openStart("div", oControl);
			oRm.class("myAppDemoWTProductRating");
			oRm.openEnd();
			oRm.renderControl(oControl.getAggregation("_rating"));
			oRm.renderControl(oControl.getAggregation("_label"));
			oRm.renderControl(oControl.getAggregation("_button"));
			oRm.close("div");
		}
	});
});