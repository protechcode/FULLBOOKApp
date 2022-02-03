package com.fullenergy.client_android;

import android.content.Intent;
import android.graphics.Rect;
import android.os.Bundle;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.PopupWindow;
import android.widget.TextView;
import android.widget.Toast;

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
import java.util.Timer;
import java.util.TimerTask;

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
        String price;
        String description;
        String category;

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
        TextView card_price;

        public ProductViewHolder(View item_dot_xmlView) {
            super(item_dot_xmlView);
        }
    }



    //End of Inner Classes

    //Custom-Methods aka MyMethods
    private void fetchData() {
        clientOkHttp = new OkHttpClient.Builder().build();


    }

    public void setUpButton(){
        Button backToMain = (Button) findViewById(R.id.shop_back_to_main);
        backToMain.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                goToMain();
            }
        });
    }

    private void goToMain() {
        int timeout = 500; // make the activity visible for 4 seconds

        Timer timer = new Timer();
        timer.schedule(new TimerTask() {

            @Override
            public void run() {
                finish();
                Intent mainAct = new Intent(MainShopActivity.this, MainActivity.class);
                startActivity(mainAct);
            }
        }, timeout);
    }


    //End of MyMethods;


    //onCreate();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_shop);
        setUpButton();

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
                        Log.i("APi Response in shop", String.valueOf(data));
                        final List<ProductClass> products = new ArrayList<ProductClass>();


                        for(int i=0; i<items.length();i++) {
                            JSONObject item = items.getJSONObject(i);
                            ProductClass product = new ProductClass();
                            product.title = item.getString("title");
                            product.description = item.getString("description");
                            product.category = item.getString("category_name");
                            product.price = item.getString("sell_price");
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

                                LinearLayoutManager llm = new LinearLayoutManager(MainShopActivity.this);
                                llm.setOrientation(LinearLayoutManager.HORIZONTAL);
                                rv.setLayoutManager(llm);


                                rv.setAdapter(adapter);
                                rv.addItemDecoration(new RecyclerView.ItemDecoration() {
                                    @Override
                                    public void getItemOffsets(Rect outRect, View view, RecyclerView parent, RecyclerView.State state) {
                                        outRect.bottom = 16; // Gap of 16px
                                    }
                                });
                            }

                            final RecyclerView.Adapter<ProductViewHolder> adapter = new RecyclerView.Adapter<ProductViewHolder>() {
                                private ProductViewHolder holder;
                                private int position;

                                @NonNull
                                @Override
                                public ProductViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
                                    ProductViewHolder vh = new ProductViewHolder(getLayoutInflater().inflate(R.layout.item, null));
                                    vh.card_image = (ImageView) vh.itemView.findViewById(R.id.item_image);
                                    vh.card_title = (TextView) vh.itemView.findViewById(R.id.item_title);
                                    vh.card_description = (TextView) vh.itemView.findViewById(R.id.item_description);
                                    vh.card_price = (TextView) vh.itemView.findViewById(R.id.item_price);
                                    return vh;
                                }

                                @Override
                                public void onBindViewHolder(@NonNull ProductViewHolder holder, int position) {


                                    Picasso.get().load(String.valueOf(products.get(position).URLi1mageOfItem)).into(holder.card_image);
                                    String image_url_1 = String.valueOf(products.get(position).URLi1mageOfItem);
                                    String title = String.valueOf(products.get(position).title);
                                    String description = String.valueOf(products.get(position).description);
                                    String price = String.valueOf(products.get(position).price);
                                    String category = String.valueOf(products.get(position).category);
                                    holder.card_title.setText(title);

                                    holder.card_description.setText(description + "...");
                                    holder.card_price.setText("€" + price);

                                    /////







                                    holder.itemView.setOnClickListener(new View.OnClickListener() {
                                        @Override
                                        public void onClick(View view) {
                                            // inflate the layout of the popup window
                                            LayoutInflater inflater = (LayoutInflater)
                                                    getSystemService(LAYOUT_INFLATER_SERVICE);
                                            View popupView = inflater.inflate(R.layout.pop_up_product, null);
                                            // create the popup window
                                            int width = LinearLayout.LayoutParams.MATCH_PARENT;
                                            int height = LinearLayout.LayoutParams.WRAP_CONTENT;
                                            boolean focusable = true; // lets taps outside the popup also dismiss it
                                            PopupWindow popupWindow = new PopupWindow(popupView, width, height, focusable);
                                            ((TextView)popupWindow.getContentView().findViewById(R.id.pop_up_title)).setText(title);
                                            ((TextView)popupWindow.getContentView().findViewById(R.id.pop_up_description)).setText(description);
                                            ((TextView)popupWindow.getContentView().findViewById(R.id.pop_up_category)).setText(category);
                                            ((TextView)popupWindow.getContentView().findViewById(R.id.pop_up_price)).setText(price);
                                            Picasso.get().load(image_url_1).into((ImageView) popupWindow.getContentView().findViewById(R.id.pop_up_image));

                                            // show the popup window
                                            // which view you pass in doesn't matter, it is only used for the window
                                            popupWindow.showAtLocation(view, Gravity.CENTER, 0, 0);

                                            // dismiss the popup window when touched
                                            popupView.setOnTouchListener(new View.OnTouchListener() {
                                                                             @Override
                                                                             public boolean onTouch(View v, MotionEvent event) {
                                                                                 popupWindow.dismiss();
                                                                                 return true;
                                                                             }
                                                                         });


                                            Toast toast = Toast.makeText(getApplicationContext(), title, Toast.LENGTH_SHORT);
                                            toast.setMargin(50, 50);
                                            toast.show();
                                        }
                                    });
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