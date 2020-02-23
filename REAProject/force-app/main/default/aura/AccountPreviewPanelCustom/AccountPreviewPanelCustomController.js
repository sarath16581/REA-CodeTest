({
    doInit: function(component, event, helper) {
        //Retrieve contact record with Account Fields on load
        helper.doinitHelper(component, event, helper);    
	},
    
    handleUpdate: function(component, event, helper) {
        //Validity to check if the Accpount Name(Mandatory field) is populated
        var validity = helper.checkValidityHelper(component, "accountName"); 
        console.log('validity' +JSON.stringify(validity));
        if(validity){
            helper.handleUpdateHelper(component, event, helper);
        }    
    }
})