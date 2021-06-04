public with sharing class AccountHelper {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(Integer revenue){
        return [SELECT Id, Name, Phone, AnnualRevenue FROM Account WHERE AnnualRevenue >= :revenue Limit 10];        
    }

    @AuraEnabled
    public static String getComics(Integer counter){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        String reqEndpoint = 'https://xkcd.com/'+counter+'/info.0.json';
        request.setEndpoint(reqEndpoint);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            return response.getBody();
        }
        return null;
    }
}