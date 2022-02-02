package com.fullenergy.client_android;

import android.graphics.Rect;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainShopActivity extends AppCompatActivity {
    //Attributes
    private OkHttpClient clientOkHttp;
    UsefulStrings url = new UsefulStrings();
    String BASE_URL = url.getURL();
    //End of Attributes;

    //Inner Classes
    public class ProductClass {
        String URLi1mageOfItem;
        String title;
        String description;
        /**
         * String URL2imageOfItem;
         * String description;
         * String URL3imageOfItem;
         * String price;
         *
         * */

    }
    private static class ProductViewHolder extends RecyclerView.ViewHolder {
        ImageView card_image;
        TextView card_title;
        TextView card_description;

        public ProductViewHolder(View item_dot_xmlView) {
            super(item_dot_xmlView);
        }
    }



    //End of Inner Classes

    //Custom-Methods aka MyMethods
    private void fetchData() {
        clientOkHttp = new OkHttpClient.Builder().build();


    }


    //End of MyMethods;


    //onCreate();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_shop);

        try {
            fetchData();
            Request request = new Request.Builder()
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
                        final List<ProductClass> products = new ArrayList<ProductClass>();


                        for(int i=0; i<items.length();i++) {
                            JSONObject item = items.getJSONObject(i);
                            ProductClass product = new ProductClass();
                            product.title = item.getString("title");
                            product.description = item.getString("description");
                            product.URLi1mageOfItem = item.getString("image_1");
                            products.add(product); // Add product to list
                        }
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                render(products);
                            }
                            private void render(final List<ProductClass> products){
                                RecyclerView rv = (RecyclerView)findViewById(R.id.shop_recyclerview);
                                rv.setLayoutManager(new LinearLayoutManager(MainShopActivity.this));

                                rv.setAdapter(adapter);
                                rv.addItemDecoration(new RecyclerView.ItemDecoration() {
                                    @Override
                                    public void getItemOffsets(Rect outRect, View view, RecyclerView parent, RecyclerView.State state) {
                                        outRect.bottom = 16; // Gap of 16px
                                    }
                                });
                            }
                            RecyclerView.Adapter<ProductViewHolder> adapter = new RecyclerView.Adapter<ProductViewHolder>() {
                                @NonNull
                                @Override
                                public ProductViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
                                    ProductViewHolder vh = new ProductViewHolder(getLayoutInflater().inflate(R.layout.item, null));
                                    vh.card_image = (ImageView) vh.itemView.findViewById(R.id.item_image);
                                    vh.card_title = (TextView) vh.itemView.findViewById(R.id.item_title);
                                    vh.card_description = (TextView) vh.itemView.findViewById(R.id.item_description);
                                    return vh;
                                }

                                @Override
                                public void onBindViewHolder(@NonNull ProductViewHolder holder, int position) {

                                    Picasso.get().load(String.valueOf(products.get(position).URLi1mageOfItem)).into(holder.card_image);
                                    String title = String.valueOf(products.get(position).title);
                                    String description = String.valueOf(products.get(position).description);
                                    holder.card_title.setText(title);
                                    holder.card_description.setText("item description");
                                }


                                @Override
                                public int getItemCount() {

                                    return products.size();
                                }
                            };
                        });

                        //try


                        //end of try
                        Log.i("IN-SHOP-APIRESPONSE=>::", String.valueOf(data));
                    } catch(JSONException e){
                        e.printStackTrace();
                    }
                }
            });

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    //End of onCreate();

}