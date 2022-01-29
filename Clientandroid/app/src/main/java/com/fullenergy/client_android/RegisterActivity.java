package com.fullenergy.client_android;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.util.Timer;
import java.util.TimerTask;
import java.util.regex.Pattern;

public class RegisterActivity extends AppCompatActivity {
    public EditText nameBox;
    public EditText emailBox;
    public EditText passwordBox;
    public Button Button_1;
    public Button Button_2;
    public Button Button_3;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        nameBox = (EditText) findViewById(R.id.register_name);
        emailBox = (EditText) findViewById(R.id.register_email);
        passwordBox = (EditText) findViewById(R.id.register_password);
        Button_1 = (Button) findViewById(R.id.register_button_1);
        Button_2 = (Button) findViewById(R.id.register_button_2);
        Button_3 = (Button) findViewById(R.id.register_button_3);
        //Register action
        Button_1.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                checkDataEntered();
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
    public boolean isEmpty(EditText text){
        CharSequence stringValueOfBox = text.getText().toString();
        return TextUtils.isEmpty(stringValueOfBox);
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





}
