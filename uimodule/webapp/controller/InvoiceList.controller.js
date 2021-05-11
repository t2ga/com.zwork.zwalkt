sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.zwork.zwalkt.controller.InvoiceList", {
		
		formatter : formatter,

		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR" //"JPY"
			});
			this.getView().setModel(oViewModel, "view");
		},

		onFilterInvoices : function (oEvent) {
			//build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			//filter binding
			//If the query is not empty, we add a new filter object to the still empty array of filters. 
			// However, if the query is empty, we filter the binding with an empty array. 
			// This makes sure that we see all list elements again.

			var oList = this.byId("invoiceList"); //list on the view 'InvoiceList'
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

		onPress: function (oEvent) {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail"); // a target from manifest.json
		}

	});
});