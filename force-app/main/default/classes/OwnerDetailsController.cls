public with sharing class OwnerDetailsController {
    
    @AuraEnabled
    public static List<User> getUsers(String recordId, String objectName){        
        String ownerId;
        Set<Id> userIdSet = new Set<Id>();
        for(SObject sObj : Database.query('SELECT Id, OwnerId FROM '+objectName+ ' WHERE Id=:recordId')){
            ownerId = String.valueOf(sObj.get('OwnerId'));
        }
        if(ownerId != null){
            if(ownerId.startsWith('005')){
				userIdSet.add(ownerId);    
            }else{				
                for(GroupMember g : [SELECT Id, UserOrGroupId FROM GroupMember WHERE GroupId=:ownerId]){
                	userIdSet.add(g.UserOrGroupId);    
                }                
            }
            return [SELECT Id, Name FROM User WHERE Id IN:userIdSet];
        }
        return null;
    }
}