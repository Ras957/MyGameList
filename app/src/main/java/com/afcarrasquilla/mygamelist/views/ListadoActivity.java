package com.afcarrasquilla.mygamelist.views;

import android.content.Intent;
import android.os.Bundle;

import com.afcarrasquilla.mygamelist.R;
import com.afcarrasquilla.mygamelist.interfaces.ListadoInterface;
import com.afcarrasquilla.mygamelist.presenters.ListadoPresenter;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

public class ListadoActivity extends AppCompatActivity implements ListadoInterface.View {

    String TAG = "MyGameList/ListadoActivity";
    private ListadoInterface.Presenter presenter;;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_listado);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setTitle("Mis Juegos");

        presenter = new ListadoPresenter(this);

        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.d(TAG, "Pulsando botón flotante...");
                Intent intent = new Intent(
                        ListadoActivity.this,
                        FormularioActivity.class);
                //startActivity(intent);
                presenter.OnClickAdd();
            }
        });
    }

    @Override
    public void lanzarFormulario() {
        Log.d(TAG, "Lanzando formulario...");
        Intent intent = new Intent(
                ListadoActivity.this,
                FormularioActivity.class);
        startActivity(intent);
    }

    @Override
    public void lanzarBuscado(){
        Log.d(TAG, "Lanzando buscado...");
        Intent intent = new Intent(
                ListadoActivity.this,
                BuscarActivity.class);
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
        }

        return super.onOptionsItemSelected(item);
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

