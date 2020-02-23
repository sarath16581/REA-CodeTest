({

    handleLoad: function(cmp, event, helper) {
        cmp.set('v.showSpinner', false);
    },
    
    handleError: function(cmp, event, helper) {
        cmp.set('v.showSpinner', false);
    },
    
    handleSuccess: function(cmp, event, helper) {
        cmp.set('v.showSpinner', true);
        var msg = $A.get("$Label.c.App_SuccessMsg");
        helper.showToastMessagehelper(cmp, event, "success", "dismissible", "Success", msg);   
        cmp.set('v.showSpinner', false);
    },
    
    handleUpdate: function(cmp, event, helper) {
        cmp.set('v.showSpinner', true);
        cmp.find("accEditForm").submit();
        cmp.find("conEditForm").submit();
    }

});