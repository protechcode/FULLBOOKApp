package com.fullenergy.client_android;

import android.graphics.Rect;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainShopActivity2 extends AppCompatActivity {

    private static String BASE_URL = new UsefulStrings().getURL();
    private RecyclerView recyclerView = null;
    private ArrayList<ProductsClass> products;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_shop2);
        initRV();
        fetchData();

    }
    //////
    void fetchData(){
        OkHttpClient clientOkHttp;
        Request request;

        clientOkHttp = new OkHttpClient.Builder().build();
        request = new Request.Builder()
                .url(BASE_URL + "/items")
                .addHeader("Content-Type","application/json")
                .build();
        clientOkHttp.newCall(request).enqueue(new Callback() {
            private Object ProductClass;

            @Override public void onFailure(Call call, IOException e) {
                Log.e("In-SHOP", "An error has occurred " + e);
            }

            @Override public void onResponse(@NonNull Call call, @NonNull Response response) throws IOException {
                try {
                    JSONObject data = new JSONObject(response.body().string());
                    JSONArray items = data.getJSONArray("items");
                    Log.i("APi Response in shop", String.valueOf(data));
                    List<ProductsClass> products = new ArrayList<ProductsClass>();


                    for (int i = 0; i < items.length(); i++) {
                        JSONObject item = items.getJSONObject(i);
                        ProductsClass product = new ProductsClass();
                        product.title = item.getString("title");
                        product.description = item.getString("description");
                        product.category = item.getString("category_name");
                        product.price = item.getString("sell_price");
                        product.URLi1mageOfItem = item.getString("image_1");
                        products.add(product); // Add product to list
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                }
                runOnUiThread(new Runnable() {

                    @Override
                    public void run() {
                        ProductsRVAdapter adapter = new ProductsRVAdapter(products, MainShopActivity2.this);

                        recyclerView.setAdapter(adapter);
                    }
                });
            }
        });
    }
    //////End of fetchData()
    //////
    void initRV(){
        recyclerView = (RecyclerView)findViewById(R.id.shop_recyclerview2);
        LinearLayoutManager llm = new LinearLayoutManager(this);
        llm.setOrientation(LinearLayoutManager.VERTICAL);
        recyclerView.setLayoutManager(llm);
        recyclerView.addItemDecoration(new RecyclerView.ItemDecoration() {
            @Override
            public void getItemOffsets(Rect outRect, View view, RecyclerView parent, RecyclerView.State state) {
                outRect.bottom = 16; // Gap of 16px
            }
        });
    }
    //////End of initRV()
}