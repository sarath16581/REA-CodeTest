({
    doInit: function(component, event, helper) {
    	helper.doinitHelper(component, event, helper);    
	},
    
    handleUpdate: function(component, event, helper) {
        var validity = helper.checkValidityHelper(component, "accountName"); 
        console.log('validity' +JSON.stringify(validity));
        if(validity){
            helper.handleUpdateHelper(component, event, helper);
        }    
    }
})