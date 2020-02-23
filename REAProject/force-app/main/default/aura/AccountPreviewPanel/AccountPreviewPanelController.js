({

    handleLoad: function(cmp, event, helper) {
        //no onLoad Actions just setting spinner to false
        cmp.set('v.showSpinner', false);
    },
    
    handleError: function(cmp, event, helper) {
        //Error handling is take care by </Lightning:Messages>
        cmp.set('v.showSpinner', false);
    },
    
    handleSuccess: function(cmp, event, helper) {
        cmp.set('v.showSpinner', true);
        var msg = $A.get("$Label.c.App_SuccessMsg");
        //Display Toast on successful action
        helper.showToastMessagehelper(cmp, event, "success", "dismissible", "Success", msg);   
        cmp.set('v.showSpinner', false);
    },
    
    handleUpdate: function(cmp, event, helper) {
        //Submit Account and Contact form separately as there are two recordeditforms and a single button to handle update
        cmp.set('v.showSpinner', true);
        cmp.find("accEditForm").submit();
        cmp.find("conEditForm").submit();
    }

});     