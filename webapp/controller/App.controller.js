sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("master.launchpad.controller.App", {
		onInit: function () {
			this.loadTilesView();
			
		},

		loadTilesView: function(){
			if(!this.page){
				this.page = new sap.ui.xmlfragment("master.launchpad.fragments.Tiles", this);
			}
			this.getView().byId("pageContainer").removeAllPages();
			this.getView().byId("pageContainer").addPage(this.page);
		},

		tilePress: function(oEvent){
			var id = oEvent.getSource().getId();
			id = id.slice(id.lastIndexOf('-') +1);
			
			var url = "https://marcelo-rm.github.io/" + id + "/webapp";
			this.loadIframe(url);
		},

		loadIframe: function(url){
			var html = new sap.ui.core.HTML({
				preferDOM: true,
				content: "<iframe src='" + url + "' " + 
							 " width='100%' height='99.3%' frameborder='0' name='iframe' " + 
							 " scrolling='no' allowtransparency='true'></iframe>"
			});
			//this.getView().byId("page").addContent(html);
			var page = new sap.m.Page({
				showHeader: false,
				content: html
			});
			this.getView().byId("pageContainer").removeAllPages();
			this.getView().byId("pageContainer").addPage(page);
		}
	});
});