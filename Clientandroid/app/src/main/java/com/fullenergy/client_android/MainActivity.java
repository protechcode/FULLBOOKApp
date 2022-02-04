package com.fullenergy.client_android;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity {
    //BASE URL For Requests
    UsefulStrings url = new UsefulStrings();
    String BASE_URL = url.getURL();


    //private static final String BASE_URL = "http://192.168.142.125:4000/api/";
    public TextView receiver;
    public Button Button_1;
    public Button Button_2;
    public Button Button_3;
    public Button Button_4;

    private OkHttpClient httpClient;
    private void fetchData() {

        httpClient = new OkHttpClient.Builder().build();
        String url = BASE_URL;
        Request request = new Request.Builder()
                .url(url)
                .method("GET", null)
                /*.addHeader("Authorization", "Client-ID 0d2e6bc907e175a")*/
                .build();
        httpClient.newCall(request).enqueue(new Callback() {


            @Override
            public void onFailure(Call call, IOException e) {
                Log.e("Main says:", "An error has occurred " + e);
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {

                String data = response.body().string();

                runOnUiThread(new Runnable() {

                    @Override
                    public void run() {
                        receiver.setText(data);
                        // Stuff that updates the UI

                    }
                });


                Log.i("API RESPONSE IS : ", data);



                //
            }


        });
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        setUpUI();
        setUpListeners();
        int timeout = 3000; // make the activity visible for 4 seconds

        Timer timer = new Timer();
        timer.schedule(new TimerTask() {

            @Override
            public void run() {
                finish();
                Intent Login = new Intent(MainActivity.this, MainShopActivity.class);
                startActivity(Login);
            }
        }, timeout);




    }
    public void setUpUI(){
        //receiver = findViewById(R.id.main_receiver);
        Button_1 = findViewById(R.id.main_button_1);
        Button_2 = findViewById(R.id.main_button_2);
        Button_3 = findViewById(R.id.main_button_3);
        Button_4 = findViewById(R.id.main_button_4);
    }
    public void setUpListeners(){
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

        Button_3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                fetchData();
            }
        });
        Button_4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int timeout = 500; // make the activity visible for 4 seconds

                Timer timer = new Timer();
                timer.schedule(new TimerTask() {

                    @Override
                    public void run() {
                        finish();
                        Intent register = new Intent(MainActivity.this, MainShopActivity.class);
                        startActivity(register);
                    }
                }, timeout);
            }
        });


    }
}