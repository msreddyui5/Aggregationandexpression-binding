sap.ui.define([
	"sap/ui/model/json/JSONModel"
	], 

    function(JSONModel){
    	
    	
    	return {
    			createJSONModel:function(){
		//step 1: create brand new model();
      			var oModel = new JSONModel();
      			
      			//oModel.setDefaultBindingMode("OneWay");
      			//step2: set data inside the model ();
      			oModel.loadData("model/mockData/madhudata.json");
      			return oModel;
		
	}
	
	
	
    		
    	};

	

      		
	
});