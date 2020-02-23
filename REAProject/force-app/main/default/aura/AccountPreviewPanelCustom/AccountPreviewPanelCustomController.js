({
    doInit: function(component, event, helper) {
        var action = component.get("c.getContactRecord");
        action.setParams({recordId : component.get("v.recordId")});
        // Create a callback that is executed after the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log('response' +JSON.stringify(response.getReturnValue()));
            if (state === "SUCCESS") {
                // Alert the user with the value returned from the server
                component.set("v.contactRecord",response.getReturnValue());
                console.log('1' +JSON.stringify(component.get("v.contactRecord")));
                // You would typically fire a event here to trigger client-side notification that the server-side action is complete
            }
            else if (state === "ERROR") {
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
    handleUpdate: function(component, event, helper) {
        var validity = helper.checkValidityHelper(component, "accountName"); 
        console.log('validity' +JSON.stringify(validity));
        if(validity){
            helper.handleUpdateHelper(component, event, helper);
        }    
    }
})