package com.afcarrasquilla.mygamelist.views;

import android.app.DatePickerDialog;
import android.os.Bundle;

import com.afcarrasquilla.mygamelist.R;
import com.afcarrasquilla.mygamelist.utilities.PickersActivity;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;

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

import java.util.Calendar;

public class FormularioActivity extends AppCompatActivity {

    String TAG = "MyGameList/FormularioActivity";

    private Spinner spinner1;
    private ImageButton bfecha;
    private EditText textFecha;
    private int dia;
    private int mes;
    private int ano;
    private Button guardar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_formulario);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setTitle("Nuevo Juego");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);


        //Spinner y sus campos
        spinner1 = (Spinner)findViewById(R.id.spinnerPlataforma) ;
        String [] opciones = {"Elige plataforma...", "PS4","XBOX","SWITCH","PC","Otro"};

        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, opciones);
        spinner1.setAdapter(adapter);


        //boton fecha y calendario
        bfecha = (ImageButton) findViewById((R.id.fechaButtom)) ;
        textFecha = (EditText)findViewById(R.id.editTextFecha) ;
        bfecha.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
               final Calendar c = Calendar.getInstance();
               dia = 1;
               mes = 1;
               ano = 2019;

                DatePickerDialog datePickerDialog = new DatePickerDialog(FormularioActivity.this, new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        textFecha.setText(dayOfMonth+"/"+month+"/"+year);
                    }
                },dia,mes,ano);
                datePickerDialog.show();
            }
        });

        /*
        int n = R.layout.content_formulario;
        EditText editText = (EditText)findViewById(R.id.editTextFecha);
        ImageButton imageButton = (ImageButton)findViewById(R.id.fechaButtom);

        PickersActivity pickersActivity = new PickersActivity(n,editText,imageButton);
        */

        //boton guardad
        guardar=(Button)findViewById(R.id.saveButton);
        guardar.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                finish();
            }
        });

        TextInputEditText nombreEditText = (TextInputEditText) findViewById(R.id.editTextNombre);
        nombreEditText.setOnFocusChangeListener(new View.OnFocusChangeListener() {
            @Override
            public void onFocusChange(View v, boolean hasFocus) {
                if (!hasFocus) {
                    TextInputEditText et = (TextInputEditText) v;
                    Log.d("AppCRUD", et.getText().toString());
                    if (et.getText().toString().startsWith("rafa")) {
                        TextInputLayout nombreInputLayout = (TextInputLayout) findViewById(R.id.textInputNombre);
                        nombreInputLayout.setError("Nombre incorrecto");
                    } else {
                        TextInputLayout nombreInputLayout = (TextInputLayout) findViewById(R.id.textInputNombre);
                        nombreInputLayout.setError("");
                    }
                }
            }
        });
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
