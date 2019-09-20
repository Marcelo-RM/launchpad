sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("master.launchpad.controller.App", {
		onInit: function () {

			var jModel = new sap.ui.model.json.JSONModel({
				busy: false
			});
			this.getView().setModel(jModel, "appView");
			this.loadTilesView();
			
		},

		loadTilesView: function(){
			/*
			if(!this.page){
				this.page = new sap.ui.xmlfragment("master.launchpad.fragments.Tiles", this);
			}
			this.getView().byId("pageContainer").removeAllPages();
			this.getView().byId("pageContainer").addPage(this.page);
			*/

			var page = new sap.m.Page({
				showHeader: false
			});

			var apps = this.getModel("apps").getData();
			for(var i = 0; i < apps.length; i++){
				var tile = new sap.m.GenericTile({
					header: apps[i].header,
					subheader: apps[i].subHeader,
					press: this.tilePress,
					tileContent: new sap.m.TileContent({
						content: new sap.m.ImageContent({
							src: apps[i].icon
						})
					})
				});
				tile.addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout");
				tile.setBindingContext(apps[i]);

				this.getView().addDependent(tile);
				page.addContent(tile);
			}

			this.getView().byId("pageContainer").removeAllPages();
			this.getView().byId("pageContainer").addPage(page);

		},

		tilePress: function(oEvent){
			window.location.href = oEvent.getSource().getBindingContext().url;
		}

		/* Carregamento direto, não necessário mais usar iframe
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
		*/
	});
});