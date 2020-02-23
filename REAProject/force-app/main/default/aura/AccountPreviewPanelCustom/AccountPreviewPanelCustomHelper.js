({
    checkValidityHelper : function(cmp, fieldId) {
        var validity;
        validity = cmp.find(fieldId).checkValidity();
        return validity;
    },
    
    handleUpdateHelper : function(cmp, event, helper) {
        var action = cmp.get("c.updateContactRecord");
        console.log('cnt rec'+JSON.stringify(cmp.get("v.contactRecord")));
        action.setParams({record : JSON.stringify(cmp.get("v.contactRecord")) });
        // Create a callback that is executed after the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            var result = response.getReturnValue();
            console.log('response' +response);
            if (state === "SUCCESS" && result === 'success') {               
                helper.showToastMessagehelper(cmp, event, "success", "dismissible", "Success", "The record has been updated successfully.");   
            	$A.get('e.force:refreshView').fire();
            }else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        helper.showToastMessagehelper(cmp, event, "error", "dismissible", "error", errors[0].message); 
                    }
                }else{                  
                    helper.showToastMessagehelper(cmp, event, "error", "dismissible", "error", "Unknown Error"); 
                }
            }
            
        });
        $A.enqueueAction(action);
    },
    
    showToastMessagehelper : function(cmp, event, type, mode, title, message){
        var resultsToast = $A.get("e.force:showToast");
        resultsToast.setParams({
            "type": type,
            "mode": mode,
            "title": title,
            "message": message
        });
        resultsToast.fire();    
    },
    
})