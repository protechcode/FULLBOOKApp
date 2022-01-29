package com.fullenergy.client_android;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import java.util.Timer;
import java.util.TimerTask;

public class LoginActivity extends AppCompatActivity {
 public Button Button_2;
 public Button Button_3;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        Button_2 = (Button) findViewById(R.id.login_button_2);
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
        Button_3 = (Button) findViewById(R.id.login_button_3);
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

    }
