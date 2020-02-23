/*Controller class for AccountPreviewPanelCustomCmp
**This class gets the contact record and performs update on Contact and Account records*/
public without sharing class AccountPreviewPanelController {
    @AuraEnabled
    public static Contact getContactRecord(Id recordId){
        Contact conRec = new Contact();
        conRec = [select id,accountId,Account.Name,Account.Description,Account.CreatedDate,Primary__c from Contact where Id=:recordId];
      	return conRec;  
    }
    
    @AuraEnabled
    public static String updateContactRecord(String record){
        try{    
        	Map<String, Object> conRecMap = (Map<String, Object>)JSON.deserializeUntyped(record);
            Map<String, Object> accRecMap = (Map<String, Object>)conRecMap.get('Account');
        
            contact con = new contact();
            con.Id = (Id)conRecMap.get('Id');
            con.Primary__c = (Boolean)conRecMap.get('Primary__c');
            Database.update(con);
            Account acc = new Account();
            acc.id = (Id)accRecMap.get('Id');
            acc.Description = (String)accRecMap.get('Description');
            acc.Name = (String)accRecMap.get('Name');
            Database.update(acc);
            return 'success';
        }
        catch(exception e){
            return e.getMessage();
        }
    }
}