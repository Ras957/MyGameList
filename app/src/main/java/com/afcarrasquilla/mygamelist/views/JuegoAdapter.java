package com.afcarrasquilla.mygamelist.views;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.media.Image;
import android.util.Base64;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.DrawableRes;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.afcarrasquilla.mygamelist.R;
import com.afcarrasquilla.mygamelist.models.Juego;
import com.afcarrasquilla.mygamelist.models.JuegoModelo;

import java.util.ArrayList;

public class JuegoAdapter  extends RecyclerView.Adapter<JuegoAdapter.JuegoViewHolder>
        implements View.OnClickListener {

    String TAG = "MyGameList/JuegoAdapter";

    private ArrayList<Juego> items;
    private View.OnClickListener listener;

    // Clase interna:
    // Se implementa el ViewHolder que se encargará
    // de almacenar la vista del elemento y sus datos
    public static class JuegoViewHolder
            extends RecyclerView.ViewHolder {

        private TextView TextView_desarrolladora;
        private TextView TextView_nombre;
        private ImageView imageView_juego;
        public LinearLayout linearLayout;

        public JuegoViewHolder(View itemView) {
            super(itemView);
            TextView_nombre = (TextView) itemView.findViewById(R.id.textViewNombre);
            TextView_desarrolladora = (TextView) itemView.findViewById(R.id.textViewDesarrolladora);
            imageView_juego = (ImageView) itemView.findViewById(R.id.imageJuego);
            linearLayout = itemView.findViewById(R.id.rowDataLayout);
        }

        public void JuegoBind(Juego item) {
            TextView_nombre.setText(item.getName());
            TextView_desarrolladora.setText(item.getCompany());
            if (item.getImage() == null){
                byte[] decodedString = Base64.decode(JuegoModelo.DEFAULT_IMAGE, Base64.DEFAULT);
                Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString,0,decodedString.length);
                imageView_juego.setImageBitmap(decodedByte);
            }else{
                byte[] decodedString = Base64.decode(item.getImage(), Base64.DEFAULT);
                Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString,0,decodedString.length);
                imageView_juego.setImageBitmap(decodedByte);
            }
        }
    }

    public void removeItem(int position){
        items.remove(position);
        notifyItemRemoved(position);
    }

    public void restoreItem (Juego juego, int position){
        items.add(position, juego);
        notifyItemInserted(position);
    }

    // Contruye el objeto adaptador recibiendo la lista de datos
    public JuegoAdapter(@NonNull ArrayList<Juego> items) {
        this.items = items;
    }

    // Se encarga de crear los nuevos objetos ViewHolder necesarios
    // para los elementos de la colección.
    // Infla la vista del layout, crea y devuelve el objeto ViewHolder
    @Override
    public JuegoViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View row = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.row_data, parent, false);
        row.setOnClickListener(this);

        JuegoViewHolder avh = new JuegoViewHolder(row);
        return avh;
    }

    // Se encarga de actualizar los datos de un ViewHolder ya existente.
    @Override
    public void onBindViewHolder(JuegoViewHolder viewHolder, int position) {
        Juego item = items.get(position);
        viewHolder.JuegoBind(item);
    }

    // Indica el número de elementos de la colección de datos.
    @Override
    public int getItemCount() {
        return items.size();
    }

    // Asigna un listener al elemento
    public void setOnClickListener(View.OnClickListener listener) {
        this.listener = listener;
    }

    @Override
    public void onClick(View view) {
        if(listener != null)
            listener.onClick(view);
    }
}
