package com.fullenergy.client_android;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.squareup.picasso.Picasso;

import java.util.ArrayList;

public class ProductsRVAdapter extends RecyclerView.Adapter<ProductsRVAdapter.ProductsViewHolder>{
    private ArrayList<ProductsClass> products;
    private Context context;

    public ProductsRVAdapter(ArrayList<ProductsClass> productList, Context context)
    {
        this.products = productList;
        this.context = context ;
    }

    public static class ProductsViewHolder extends RecyclerView.ViewHolder{
        ImageView card_image;
        TextView card_title;
        TextView card_description;
        TextView card_price;


        public ProductsViewHolder(@NonNull View itemView) {
            super(itemView);
           /* itemView.findViewById(R.id.item_button).setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Log.d("ONCLICK", "Clicked");
                }
            });*/
        }



    }
    @NonNull
    @Override
    public ProductsViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item,parent,false);
        ProductsViewHolder viewHolder = new ProductsViewHolder(view) ;
        viewHolder.card_image = (ImageView) viewHolder.itemView.findViewById(R.id.item_image);
        viewHolder.card_title = (TextView) viewHolder.itemView.findViewById(R.id.item_title);
        viewHolder.card_description = (TextView) viewHolder.itemView.findViewById(R.id.item_description);
        viewHolder.card_price = (TextView) viewHolder.itemView.findViewById(R.id.item_price);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull ProductsViewHolder holder, int position) {

        String image_url_1 = String.valueOf(products.get(position).URLi1mageOfItem);
        String title = String.valueOf(products.get(position).title);
        String description = String.valueOf(products.get(position).description);
        String price = String.valueOf(products.get(position).price);
        String category = String.valueOf(products.get(position).category);
        holder.card_title.setText(title);
        holder.card_description.setText(description);
        holder.card_price.setText(price);
        Picasso.get().load(image_url_1).into(holder.card_image);
    }

    @Override
    public int getItemCount() {
        return products.size();
    }


}
