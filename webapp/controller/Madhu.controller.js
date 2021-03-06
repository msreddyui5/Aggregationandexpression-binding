sap.ui.define([
		"jerry/controller/BaseController",
		"sap/m/MessageBox"
	],
	function(BaseController,oSpiderman) {
		return BaseController.extend("jerry.controller.Madhu", {
			
			
			//acts like constructor of a class
			// ui5 will call automatically once in life time when the app starts
			// all your initialization code can go in
			onInit: function(){
				
				this.createModel();
				
			}, 
			onSwtChange: function(){
				var oModel = sap.ui.getCore().getModel();
				if(oModel.getProperty("/empStr/alia") === true){
					oModel.setProperty("/empStr/alia", false);
					}else{
						oModel.setProperty("/empStr/alia", true);
						
					}
			},

				showSomePower: function() {
				
				//	var oKillMe = sap.ui.getCore().byId("idBtn");
				var oView = this.getView();
				var oKillMe = oView.byId("idBtn");
					oKillMe.attachPress(this.killMe, this);
					//var field = sap.ui.getCore().byId("idBtn1").setVisible(false); 

				},

				killMe: function() {
					//strp 1: obtain the object of input field
					//var val = sap.ui.getCore().byId("idInp").getValue();
					var val = this.getView().byId("idInp").getValue();
					/*			var oKillMe = sap.ui.getCore().byId("idBtn");
			 if(oKillMe.getVisible()) {
           oKillMe.setVisible(false);
       }*/
				//alert(val);
				oSpiderman.confirm(val);
					//this.showPopup(val);
				}

			}

		);
	});