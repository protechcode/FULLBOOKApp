package com.fullenergy.client_android;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.gson.Gson;

import java.io.IOException;
import java.util.HashMap;
import java.util.Timer;
import java.util.TimerTask;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
public class LoginActivity extends AppCompatActivity {
    //BASE URL For Requests
    UsefulStrings url = new UsefulStrings();
    String BASE_URL = url.getURL();


    public TextView email;
    public TextView password;
    public Button Button_1;
    public Button Button_2;
    public Button Button_3;
    StorageForClientCredentials localStorage;

    //Declaration of client(okHttp) for sending requests
    private OkHttpClient httpClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        setUpUI();
        setUpListeners();


        }

    //Data Validation
    public boolean isEmpty(EditText text){
        CharSequence stringValueOfBox = text.getText().toString();
        return TextUtils.isEmpty(stringValueOfBox);
    }
    public boolean isEmail(EditText text){
        CharSequence email = text.getText().toString();
        return (!TextUtils.isEmpty(email)&& Patterns.EMAIL_ADDRESS.matcher(email).matches());
    }
    public void checkUserData(){

        if(isEmpty((EditText) email)){
            email.setError("You must need to enter your Email");

        }else{
            if(isEmail((EditText) email) == false){
                email.setError("You must need to enter your Email");

            }
        }
        if(isEmpty((EditText) password)){
            password.setError("You must need to enter your password");
        }else{
            String passwordLength = password.getText().toString();
            if(passwordLength.length() < 6){
                password.setError("You must enter your a valid password of at least 6 characters!");
            }
        }

    }
    //End of Data Validation

    //okHttp Request
    void postToLoginRoute(){
        checkUserData();
        httpClient = new OkHttpClient();
        //Gson is a JSONParser (Needed for sending the request as JSON)
        Gson gson = new Gson();
        //Preparing key-values


        //Keys
        String key_email = "email";
        String key_password= "password";
        //Values
        checkUserData();
        String value_email = email.getText().toString();
        String value_password= password.getText().toString();
        //We will use HashMap as equivalent to [{"key":"value"}]
        HashMap<String, String> data = new HashMap<String, String>();
        data.put(key_email, value_email);
        data.put(key_password, value_password);
        //Declare a MediaType for okHttp RequestBody (Needs MediaType and a String)
        MediaType JSON = MediaType.parse("application/json");
        //Declare String for okHttp RequestBody (Needs MediaType and a String)
        String json = gson.toJson(data);
        //okHttp RequestBody aka constructor
        RequestBody body = RequestBody.create(json,JSON);
        //okHttp Request Builder aka constructor
        Request request = new Request.Builder()
                .url(BASE_URL + "/login")
                .method("POST",body)
                .addHeader("Content-Type", "application/json")
                .build();

        //okHttp Call to receive the response
        Call call = httpClient.newCall(request);
        //Asynchronous Call method '.enqueue()' with 'Callbacks(onFailure(), onResponse())' [Equivalent to JS 'async () =>{fetch().then().catch()}' ];
        call.enqueue(new Callback() {
            @Override
            public void onResponse(@NonNull Call call, @NonNull Response response) throws IOException {
                String usrNTokn = response.body().string();
                Gson gsonDecode = new Gson();
                gsonDecode.toJson(usrNTokn);
                Log.i("GSONDECODE:", gsonDecode.toJson(usrNTokn));

                goToMain();
            }

            @Override
            public void onFailure(@NonNull Call call, @NonNull IOException e) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        checkUserData();
                        // For the example, you can show an error dialog or a toast
                        // on the main UI thread
                    }
                });

            }
        });
    }
    public void goToMain(){
        int timeout = 500; // make the activity visible for 4 seconds

        Timer timer = new Timer();
        timer.schedule(new TimerTask() {

            @Override
            public void run() {
                finish();
                Intent mainAct = new Intent(LoginActivity.this, MainActivity.class);
                startActivity(mainAct);
            }
        }, timeout);

    }
    public void setUpUI(){
        email = (EditText) findViewById(R.id.login_email);
        password =  (EditText) findViewById(R.id.login_password);
        Button_1 = (Button) findViewById(R.id.login_button_1);
        Button_2 = (Button) findViewById(R.id.login_button_2);
        Button_3 = (Button) findViewById(R.id.login_button_3);
    }
    public void setUpListeners(){
        //Login action
        Button_1.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                postToLoginRoute();

            }
        });
        //go to Register Activity
        Button_2.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                int timeout = 500; // make the activity visible for 4 seconds

                Timer timer = new Timer();
                timer.schedule(new TimerTask() {

                    @Override
                    public void run() {
                        finish();
                        Intent Login = new Intent(LoginActivity.this, RegisterActivity.class);
                        startActivity(Login);
                    }
                }, timeout);
            }
        });
        //go back to Main Activity

        Button_3.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                goToMain();
            }
        });

    }
    }
