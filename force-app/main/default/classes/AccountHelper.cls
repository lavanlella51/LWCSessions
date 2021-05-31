public with sharing class AccountHelper {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(Integer revenue){
        return [SELECT Id, Name, Phone, AnnualRevenue FROM Account WHERE AnnualRevenue >= :revenue Limit 10];        
    }
}