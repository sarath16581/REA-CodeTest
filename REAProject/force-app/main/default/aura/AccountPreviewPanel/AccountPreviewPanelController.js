({

handleLoad: function(cmp, event, helper) {
    cmp.set('v.showSpinner', false);
},

handleError: function(cmp, event, helper) {
    cmp.set('v.showSpinner', false);
},

handleSuccess: function(cmp, event, helper) {
    cmp.set('v.showSpinner', true);
        var resultsToast = $A.get("e.force:showToast");
        resultsToast.setParams({
            "type":"success",
            "mode": "dismissible",
            "title": "Success",
            "message": "The record has been updated successfully."
        });
        resultsToast.fire();
    
    cmp.set('v.showSpinner', false);
    //cmp.set('v.saved', true);
},

handleUpdate: function(cmp, event, helper) {
    cmp.set('v.showSpinner', true);
    cmp.find("accEditForm").submit();
    cmp.find("conEditForm").submit();
}

});