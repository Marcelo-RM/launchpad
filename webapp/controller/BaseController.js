sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    
    return Controller.extend("master.launchpad.controller.BaseController", {

        onInit: function(){

        },

        getModel: function(sModel){
            return this.getOwnerComponent().getModel(sModel);
        },

        getResourceBundle: function(){
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        }
    });
});