package com.fullenergy.client_android;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.content.Intent;
import android.graphics.Rect;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOError;
import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity {
    public TextView receiver;
    public Button Button_1;
    public Button Button_2;
    public Button Button_3;
    private OkHttpClient httpClient;
    private void fetchData() {

        httpClient = new OkHttpClient.Builder().build();
        String url = "http://192.168.1.51:4000/api";
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




    }
    public void setUpUI(){
        receiver = findViewById(R.id.main_receiver);
        Button_1 = findViewById(R.id.main_button_1);
        Button_2 = findViewById(R.id.main_button_2);
        Button_3 = findViewById(R.id.main_button_3);
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


    }
}