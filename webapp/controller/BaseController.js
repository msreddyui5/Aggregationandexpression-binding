sap.ui.define(
	["sap/ui/core/mvc/Controller" ,
	"jerry/model/models"],
  function(Controller,models){
      	
      	return Controller.extend("jerry.controller.BaseController",{
      		
      		//reusable code which can be used by any child controller
      		
      		showPopup:function(msg){
      			alert(msg);
      		},
      		createModel: function(){
      			
      			debugger;
      		var oModel = models.createJSONModel();
      				//step3 : make model aware about the application
      			sap.ui.getCore().setModel(oModel);
      			
      		}
      		
      	
      			
      		
      		
      	});
	
	
	
});