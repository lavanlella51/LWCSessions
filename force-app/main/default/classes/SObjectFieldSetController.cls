/**
 * @file name: SObjectFieldSetController  
 * @description : Used to fetch fieldsets based on input and return to component.
 * @created date: 28th May, 2021
 * @last modified date: 28th May, 2021
 * @author: Lavan
 */
public with sharing class SObjectFieldSetController {
    
    /**
    * @name: getFieldSets
    * @description : Will fetch the fieldsets, returns fieldset details.
    * @param fieldSetNames
    * @param objectName
    * @return List<FieldSetDetail>    
    */
    @AuraEnabled
    public static List<FieldSetDetail> getFieldSets(String fieldSetNames, String objectName){        
        List<FieldSetDetail> fieldSetDetailList = new List<FieldSetDetail>();
        
        Map<String, Schema.SObjectType> globalDescribeMap = Schema.getGlobalDescribe();
        Schema.SObjectType SObjectTypeObj = globalDescribeMap.get(objectName);
        Schema.DescribeSObjectResult DescribeSObjectResultObj = SObjectTypeObj.getDescribe();
        Map<String, Schema.FieldSet> fieldSetMap = DescribeSObjectResultObj.FieldSets.getMap();
        
        for(String fieldsetName : fieldSetNames.split(',')){
            Schema.FieldSet fieldsetDetail = fieldSetMap.get(fieldsetName);
            List<String> fieldAPINames = new List<String>();
            for(Schema.FieldSetMember fieldSetMemberObj : fieldsetDetail.getFields()){
                fieldAPINames.add(fieldSetMemberObj.getFieldPath());
            }
            fieldSetDetailList.add(
                new FieldSetDetail(
                    fieldsetDetail.getLabel(),
                    fieldsetDetail.getName(),    
                    fieldsetDetail.getDescription(),
                    fieldAPINames
                )
            );
        }
        return fieldSetDetailList;
    }
    
    /**
    * @name: FieldSetDetail
    * @description : Inner class, used to store fieldset details.
    */
    public class FieldSetDetail {
        /**
        * @description : inner class variable to store the fieldset label
        */
        @AuraEnabled
        public String label { get; set; }
        /**
        * @description : inner class variable to store the fieldset API name
        */
        @AuraEnabled
        public String name { get; set; }
        /**
        * @description : inner class variable to store the fieldset description
        */
        @AuraEnabled
        public String description { get; set; }    
        /**
        * @description : inner class variable to store the list of field API names.
        */
        @AuraEnabled
        public List<String> fieldAPIList { get; set; }
        
        /**
        * @description : default constructor of the inner class
        * @param label
        * @param name
        * @param description
        * @param fieldAPIList
        */
        public FieldSetDetail(
            String label,
            String name,
            String description,
            List<String> fieldAPIList
        ) {
            this.label = label;
            this.name = name;
            this.description = description;
            this.fieldAPIList = fieldAPIList;
        }
    }
}