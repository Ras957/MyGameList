package com.afcarrasquilla.mygamelist.views;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;

import com.afcarrasquilla.mygamelist.interfaces.BuscarInterface;
import com.afcarrasquilla.mygamelist.presenters.BuscarPresenter;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Spinner;

import com.afcarrasquilla.mygamelist.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.Calendar;

public class BuscarActivity extends AppCompatActivity implements BuscarInterface.View{

    String TAG = "MyGameList/BuscarActivity";

    private BuscarInterface.Presenter presenter;

    private Button buscar;
    private ImageButton bfecha;
    private EditText textFecha;
    private int dia;
    private int mes;
    private int ano;
    private Spinner spinner1;
    private TextInputEditText myName;
    private TextInputEditText myCompany;
    private EditText myHours;
    private EditText myDate;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_buscar);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        //getSupportActionBar().setTitle("Buscar Juego");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        presenter = new BuscarPresenter(this);


        //boton fecha y calendario
        bfecha = (ImageButton) findViewById((R.id.fechaButtom)) ;
        textFecha = (EditText)findViewById(R.id.editTextFecha) ;
        bfecha.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                final Calendar c = Calendar.getInstance();
                dia = c.get(Calendar.DAY_OF_MONTH);
                mes = c.get(Calendar.MONTH);
                ano = c.get(Calendar.YEAR);

                DatePickerDialog datePickerDialog = new DatePickerDialog(BuscarActivity.this, new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        textFecha.setText(dayOfMonth+"/"+month+"/"+year);
                    }
                },dia,mes,ano);
                datePickerDialog.show();
            }
        });

        //Spinner y sus campos
        spinner1 = (Spinner)findViewById(R.id.spinnerPlataforma) ;
        String [] opciones = {"Elige plataforma...", "PS4","XBOX","SWITCH","PC","Otro"};

        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, opciones);
        spinner1.setAdapter(adapter);

        //boton buscar
        buscar = (Button) findViewById(R.id.searchButton);
        buscar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                myName = (TextInputEditText) findViewById(R.id.editTextNombre);
                String name = "%"+myName.getText().toString()+"%";
                myCompany = (TextInputEditText) findViewById(R.id.editTextDesarrolladora);
                String desarrolladora = "%"+myCompany.getText().toString()+"%";
                myHours = (EditText) findViewById(R.id.editTextHoras);
                String horas = "%"+myHours.getText().toString()+"%";
                myDate = (EditText) findViewById(R.id.editTextFecha);
                String fecha = "%"+myDate.getText().toString()+"%";
                spinner1 = (Spinner)findViewById(R.id.spinnerPlataforma);
                String plataforma;
                if (spinner1.getSelectedItem().toString().equals("Elige plataforma...")){
                    plataforma = "%%";
                }else{
                    plataforma = "%"+spinner1.getSelectedItem().toString()+"%";
                }
                String [] datos = new String[5];
                datos[0] = name;
                datos[1] = desarrolladora;
                datos[2] = horas;
                datos[3] = fecha;
                datos[4] = plataforma;
                presenter.onClickSearch(datos);
                finish();
            }
        });
    }

    @Override
    public void search(String [] datos){
        Intent intent = new Intent();
        intent.putExtra("datos",datos);
        setResult(RESULT_OK, intent);
        //startActivityForResult(intent, PICK_CONTACT_REQUEST);
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
