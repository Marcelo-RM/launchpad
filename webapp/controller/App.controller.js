sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("master.launchpad.controller.App", {
		onInit: function () {
			
			var html = new sap.ui.core.HTML({
				preferDOM: true,
				content: "<iframe src='https://marcelo-rm.github.io/manageProjects/webapp' " + 
							 " width='100%' height='99.3%' frameborder='0' name='iframe' " + 
							 " scrolling='no' allowtransparency='true'></iframe>"
			});
			//this.getView().byId("page").addContent(html);
			var x = new sap.m.Page({
				content: html
			});
			this.getView().byId("pageContainer").addPage(x);
			
		}
	});
});