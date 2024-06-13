sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode'
], function(Controller, MessageToast,JSONModel,BindingMode){
    'use strict';
    return Controller.extend("app.Fifth",{
        onInIt : function(){
            this.getView().setModel(new JSONModel({
                message:"This is a method for dataBinding"
            
            })
            )
        },
        // Two way binding
        onInit:function(){
            var jModel=new JSONModel({message:"This is message for Two way binding"});
            this.getView().setModel(jModel);

           },
          // one way binding
          onInit:function(){
             var jModel=new JSONModel({message:"This is message for one way binding"});
             jModel.setDefaultBindingMode(BindingMode.OneWay);
              this.getView().setModel(jModel);
 
             },

        show_text:function(){
         var mdata=this.getView().getModel().getProperty("/message")
         MessageToast.show(mdata)

    } 

    });
});
