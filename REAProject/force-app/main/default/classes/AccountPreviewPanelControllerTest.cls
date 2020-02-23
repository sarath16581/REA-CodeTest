@isTest
private class AccountPreviewPanelControllerTest {
    
    static testMethod void getUpdateContactRecordTest() {
        Account acc = new Account();
        acc.name='Test Acc';
        acc.Description='Test Acc Desc';
        insert acc;
        contact c = new contact();
        c.accountId=acc.id;
        c.firstName='First Test';
        c.lastName='Last Test';
        c.primary__c = false;
        insert c;
        Test.startTest();
        Contact con=AccountPreviewPanelController.getContactRecord(c.Id);
        System.assertNotEquals(Null, con);
        String s1= '{"Id":"conId","AccountId":"accid","Primary__c":true,"Account":{"Name":"test acc","Description":"test decription","Id":"accid"}}';
        String s2 = s1.replace('conId', con.Id).replace('accid', con.AccountId);
        String result=AccountPreviewPanelController.updateContactRecord(s2);
        System.assertEquals('success', result);
        String result1=AccountPreviewPanelController.updateContactRecord(s1);
        System.assertNotEquals('success', result1);
        Test.stopTest();
    }
}