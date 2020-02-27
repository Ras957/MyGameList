package com.afcarrasquilla.mygamelist.views;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;

import com.afcarrasquilla.mygamelist.R;
import com.afcarrasquilla.mygamelist.interfaces.ListadoInterface;
import com.afcarrasquilla.mygamelist.models.Juego;
import com.afcarrasquilla.mygamelist.models.RowDataTouchHelper;
import com.afcarrasquilla.mygamelist.presenters.ListadoPresenter;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

import java.util.ArrayList;

public class ListadoActivity extends AppCompatActivity implements ListadoInterface.View,
        RowDataTouchHelper.rowDataTouchHelperListener {

    String TAG = "MyGameList/ListadoActivity";

    static final int PICK_CONTACT_REQUEST = 1;

    private ListadoInterface.Presenter presenter;
    private RecyclerView recyclerView;
    private JuegoAdapter adaptador;
    private ArrayList<Juego> juegos = new ArrayList<>();
    private TextView nJuegos;
    private boolean filtrado=false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_listado);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        //getSupportActionBar().setTitle("Mis Juegos");

        presenter = new ListadoPresenter(this);

        // Inicializa el RecyclerView
        recyclerView = (RecyclerView) findViewById(R.id.recyclerViewJuegos);

        // Crea el Adaptador con los datos de la lista anterior
        juegos = presenter.getAllGames();
        nJuegos = (TextView) findViewById(R.id.contadorTextView2);
        nJuegos.setText(presenter.countAllGames());
        adaptador = new JuegoAdapter(juegos);

        // Asocia el Adaptador al RecyclerView
        recyclerView.setAdapter(adaptador);

        // Muestra el RecyclerView en vertical
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        // Asocia el elemento de la lista con una acción al ser pulsado
        adaptador.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Acción al pulsar el elemento
                int position = recyclerView.getChildAdapterPosition(v);
                Log.d(TAG, "Click RV: " + position + " " +
                        juegos.get(position).getId().toString());
                presenter.onClickJuego(juegos.get(position).getId());
            }
        });

        ItemTouchHelper.SimpleCallback simpleCallback =
                new RowDataTouchHelper(0, ItemTouchHelper.LEFT, ListadoActivity.this);

        new ItemTouchHelper(simpleCallback).attachToRecyclerView(recyclerView);

        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.d(TAG, "Pulsando botón flotante...");
                //Intent intent = new Intent(
                        //ListadoActivity.this,
                        //FormularioActivity.class);
                presenter.onClickAdd();
            }
        });
    }

    @Override
    public void lanzarFormulario(int id) {
        Log.d(TAG, "Lanzando formulario...");
        if (id == -1){
            Intent intent = new Intent(
                    ListadoActivity.this,
                    FormularioActivity.class);
            intent.putExtra("config","new");
            startActivity(intent);
        }else{
            Intent intent = new Intent(
                    ListadoActivity.this,
                    FormularioActivity.class);
            intent.putExtra("id",id);
            intent.putExtra("config","modify");
            startActivity(intent);
        }

    }

    @Override
    public void lanzarBuscado(){
        Log.d(TAG, "Lanzando buscado...");
        Intent intent = new Intent(
                ListadoActivity.this,
                BuscarActivity.class);
        startActivityForResult(intent,PICK_CONTACT_REQUEST);
    }

    @Override
    public void lanzarSobre(){
        Log.d(TAG, "Lanzando sobre...");
        Intent intent = new Intent(
                ListadoActivity.this,
                SobreActivity.class);
        startActivity(intent);
    }

    @Override
    public void lanzarAyuda(){
        Log.d(TAG, "Lanzando ayuda...");
        Intent intent = new Intent(
                ListadoActivity.this,
                AyudaActivity.class);
        startActivity(intent);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }else if (id == R.id.action_search){
            presenter.onClickSearch();
        }else if (id == R.id.action_about){
            presenter.onClickAbout();
        }else if (id == R.id.action_help){
            presenter.onClickHelp();
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onSwipe(RecyclerView.ViewHolder viewHolder, int direction, int position) {
        if(viewHolder instanceof JuegoAdapter.JuegoViewHolder){
            adaptador.removeItem(viewHolder.getAdapterPosition());
            String nombre = presenter.getAllGames().get(viewHolder.getAdapterPosition()).getName();
            final Juego juegoBorrado = presenter.getAllGames().get(viewHolder.getAdapterPosition());
            final int deletedIntex = viewHolder.getAdapterPosition();
            presenter.deleteGame(presenter.getAllGames().get(viewHolder.getAdapterPosition()).getId());

            Snackbar snackbar = Snackbar.make(((JuegoAdapter.JuegoViewHolder) viewHolder).linearLayout,
                    nombre + " Elminado", Snackbar.LENGTH_LONG);
            snackbar.setAction("Deshacer", new View.OnClickListener() {
                @Override
                public void onClick (View v) {
                    adaptador.restoreItem(juegoBorrado, deletedIntex);
                }
            });

            snackbar.setActionTextColor(Color.GREEN);
            snackbar.show();
        }
    }

    @Override
    public void borrarRowData(RecyclerView.ViewHolder viewHolder){
        adaptador.removeItem(viewHolder.getAdapterPosition()+1);
    }

    @Override
    protected void onStart(){
        super.onStart();
        Log.d(TAG, "Ejecutando onStart...");
    }

    @Override
    protected void onResume(){
        super.onResume();
        Log.d(TAG, "Ejecutando onResume...");

        if (!filtrado) {
            // Inicializa el RecyclerView
            recyclerView = (RecyclerView) findViewById(R.id.recyclerViewJuegos);

            // Crea el Adaptador con los datos de la lista anterior
            juegos = presenter.getAllGames();
            nJuegos = (TextView) findViewById(R.id.contadorTextView2);
            nJuegos.setText(presenter.countGames(juegos));
            adaptador = new JuegoAdapter(juegos);

            // Asocia el Adaptador al RecyclerView
            recyclerView.setAdapter(adaptador);

            // Muestra el RecyclerView en vertical
            recyclerView.setLayoutManager(new LinearLayoutManager(this));

            // Asocia el elemento de la lista con una acción al ser pulsado
            adaptador.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    // Acción al pulsar el elemento
                    int position = recyclerView.getChildAdapterPosition(v);
                    Log.d(TAG, "Click RV: " + position + " " +
                            juegos.get(position).getId().toString());
                    presenter.onClickJuego(juegos.get(position).getId());
                }
            });
        }

        filtrado=false;
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode,resultCode,data);
        // Check which request we're responding to
        if (requestCode == PICK_CONTACT_REQUEST) {
            // Make sure the request was successful
            if (resultCode == RESULT_OK) {
                String[] datos = data.getStringArrayExtra("datos");

                // Inicializa el RecyclerView
                recyclerView = (RecyclerView) findViewById(R.id.recyclerViewJuegos);

                // Crea el Adaptador con los datos de la lista anterior
                juegos = presenter.searchGames(datos);
                nJuegos = (TextView) findViewById(R.id.contadorTextView2);
                nJuegos.setText(presenter.countGames(juegos));
                adaptador = new JuegoAdapter(juegos);

                // Asocia el Adaptador al RecyclerView
                recyclerView.setAdapter(adaptador);

                // Muestra el RecyclerView en vertical
                recyclerView.setLayoutManager(new LinearLayoutManager(this));

                // Asocia el elemento de la lista con una acción al ser pulsado
                adaptador.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        // Acción al pulsar el elemento
                        int position = recyclerView.getChildAdapterPosition(v);
                        Log.d(TAG, "Click RV: " + position + " " +
                                juegos.get(position).getId().toString());
                        presenter.onClickJuego(juegos.get(position).getId());
                    }
                });
            }
        }
        filtrado=true;
    }

    @Override
    protected void onPause(){
        super.onPause();
        Log.d(TAG, "Ejecutando onPause...");
    }

    @Override
    protected void onStop(){
        super.onStop();
        Log.d(TAG, "Ejecutando onStop...");
    }

    @Override
    protected void onRestart(){
        super.onRestart();
        Log.d(TAG, "Ejecutando onRestart...");
    }

    @Override
    protected void onDestroy(){
        super.onDestroy();
        Log.d(TAG, "Ejecutando onDestroy...");
    }
}

