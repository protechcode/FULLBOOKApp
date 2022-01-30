package com.fullenergy.client_android;

import java.util.HashMap;

public class StorageForClientCredentials {
    String key_toLocal;
    String value_toLocal;
    //We will use HashMap as equivalent to [{"key":"value"}]
    private HashMap<String, String> keyValuePairs= new HashMap<String, String>();
    ///Key
    void setKey_toLocal(String key_ToSave){
        this.key_toLocal = key_ToSave;
    }
    String getKey_toLocal(){
        return this.key_toLocal;
    }
    ///Value
    void setValue_toLocal(String value_ToSave){
        this.value_toLocal = value_ToSave;
    }
    String getValue_toLocal(){
        return this.value_toLocal;
    }
    ///Pairs
    void setKeyValuePairs(String key_ToSave, String value_ToSave){
        //We will use HashMap as equivalent to [{"key":"value"}]
        this.keyValuePairs.put(key_ToSave, value_ToSave);
    }
    HashMap<String, String> getKeyValuePairs(){
        return this.keyValuePairs;
    }
}
