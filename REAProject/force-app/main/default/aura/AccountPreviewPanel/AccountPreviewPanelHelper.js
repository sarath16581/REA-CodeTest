({
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