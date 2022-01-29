package com.fullenergy.client_android;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import java.util.Timer;
import java.util.TimerTask;

public class MainActivity extends AppCompatActivity {
    public Button Button_1;
    public Button Button_2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button_1 = findViewById(R.id.main_button_1);

        Button_1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v){
                int timeout = 500; // make the activity visible for 4 seconds

                Timer timer = new Timer();
                timer.schedule(new TimerTask() {

                    @Override
                    public void run() {
                        finish();
                        Intent Login = new Intent(MainActivity.this, LoginActivity.class);
                        startActivity(Login);
                    }
                }, timeout);
            }
        });

        Button_2 = findViewById(R.id.main_button_2);
        Button_2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v){
                int timeout = 500; // make the activity visible for 4 seconds

                Timer timer = new Timer();
                timer.schedule(new TimerTask() {

                    @Override
                    public void run() {
                        finish();
                        Intent register = new Intent(MainActivity.this, RegisterActivity.class);
                        startActivity(register);
                    }
                }, timeout);
            }
        });


    }
}