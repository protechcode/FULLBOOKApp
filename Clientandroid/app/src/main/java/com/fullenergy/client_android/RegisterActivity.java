package com.fullenergy.client_android;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

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

public class RegisterActivity extends AppCompatActivity {
    //BASE URL For Requests
    private static final String BASE_URL = "http://192.168.1.51:4000/api";

    //Declaration of UI elements
    public EditText nameBox;
    public EditText emailBox;
    public EditText passwordBox;
    public Button Button_1;
    public Button Button_2;
    public Button Button_3;

    //Declaration of client(okHttp) for sending requests
    private OkHttpClient httpClient;

    //onCreate method
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        //Custom setters for UI elements and its listeners
        setUpUI();
        setUpListeners();
        }

    //Data Validation
    public boolean isEmpty(EditText text){
        CharSequence stringValueOfBox = text.getText().toString();
        return TextUtils.isEmpty(stringValueOfBox); // return True if its empty string
    }
    public boolean isEmail(EditText text){
        CharSequence email = text.getText().toString();
        return (!TextUtils.isEmpty(email)&& Patterns.EMAIL_ADDRESS.matcher(email).matches());
    }
    public void checkDataEntered() {

        if(isEmail(emailBox) == false){
            emailBox.setError("Enter a Valid Email!");
                   /*Toast message = Toast.makeText(RegisterActivity.this, "You must Enter a valid email", Toast.LENGTH_SHORT);
                    message.show();*/
        }
        if(isEmpty(nameBox)){
            nameBox.setError("Name Required!");
                    /*Toast message = Toast.makeText(RegisterActivity.this, "You must Enter Your name", Toast.LENGTH_SHORT);
                    message.show();*/
        }

        if(isEmpty(passwordBox)){

            passwordBox.setError("Password Required!");
            Toast message = Toast.makeText(RegisterActivity.this, "You must Enter a Secure Password it's empty", Toast.LENGTH_SHORT);
            message.show();
        }/*else if(passwordBox.getText().toString().length() < 6){
            Toast message = Toast.makeText(RegisterActivity.this, "You must Enter a Secure Password containing at least 6 characters", Toast.LENGTH_SHORT);
            message.show();
        }*/






    }
    //End of Data Validation

    //okHttp Request
    public void postDataToRegisterEndPoint()  throws IOException {

        httpClient = new OkHttpClient();

        //Gson is a JSONParser (Needed for sending the request as JSON)
        Gson gson = new Gson();

        //Preparing key-values

        //Keys
        String key_name = "name";
        String key_email = "email";
        String key_password= "password";

        //Values
        String value_name = nameBox.getText().toString();
        String value_email = emailBox.getText().toString();
        String value_password= passwordBox.getText().toString();

        //We will use HashMap as equivalent to [{"key":"value"}]
        HashMap<String, String> data = new HashMap<String, String>();
        data.put(key_name, value_name);
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
                .url(BASE_URL + "/register")
                .method("POST",body)
                .addHeader("Content-Type", "application/json")
                /*.post(formBody)*/
                .build();
        //okHttp Call to receive the response
        Call call = httpClient.newCall(request);
        //Asynchronous Call method '.enqueue()' with 'Callbacks(onFailure(), onResponse())' [Equivalent to JS 'async () =>{fetch().then().catch()}' ];
        call.enqueue(new Callback() {
            @Override
            public void onFailure(final Call call, IOException e) {
                // Error

                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        checkDataEntered();
                        // For the example, you can show an error dialog or a toast
                        // on the main UI thread
                    }
                });
            }

            @Override
            public void onResponse(Call call, final Response response) throws IOException {
                String res = response.body().string();

                Log.i("Register.postData(): ", res);


                // Do something with the response
            }
        });
}
    //End of okHttp Request

    //Setters
    public void setUpUI(){
        nameBox = (EditText) findViewById(R.id.register_name);
        emailBox = (EditText) findViewById(R.id.register_email);
        passwordBox = (EditText) findViewById(R.id.register_password);
        Button_1 = (Button) findViewById(R.id.register_button_1);
        Button_2 = (Button) findViewById(R.id.register_button_2);
        Button_3 = (Button) findViewById(R.id.register_button_3);
    }
    public void setUpListeners(){
        //Register action
        Button_1.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                checkDataEntered();
                runOnUiThread(new Runnable() {

                    @Override
                    public void run() {
                        try {
                            postDataToRegisterEndPoint();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                        // Stuff that updates the UI

                    }
                });

                Log.i("Register Says", nameBox.getText().toString() + "  " + emailBox.getText().toString() + "  " + passwordBox.getText().toString());
            }

        });
        //go back to Login Activity
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
                        Intent login = new Intent(RegisterActivity.this, LoginActivity.class);
                        startActivity(login);
                    }
                }, timeout);
            }
        });
        //go back to Main Activity

        Button_3.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                int timeout = 500; // make the activity visible for 4 seconds

                Timer timer = new Timer();
                timer.schedule(new TimerTask() {

                    @Override
                    public void run() {
                        finish();
                        Intent mainAct = new Intent(RegisterActivity.this, MainActivity.class);
                        startActivity(mainAct);
                    }
                }, timeout);
            }
        });
    }



}
