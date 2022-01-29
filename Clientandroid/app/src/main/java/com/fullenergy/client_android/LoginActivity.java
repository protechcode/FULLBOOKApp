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
import android.widget.TextView;

import org.w3c.dom.Text;

import java.util.Timer;
import java.util.TimerTask;

public class LoginActivity extends AppCompatActivity {
    public TextView email;
    public TextView password;
    public Button Button_1;
    public Button Button_2;
    public Button Button_3;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        setUpUI();
        setUpListeners();


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
                    checkUserData();

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

    }
