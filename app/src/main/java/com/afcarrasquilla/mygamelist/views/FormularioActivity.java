package com.afcarrasquilla.mygamelist.views;

import android.Manifest;
import android.app.AlertDialog;
import android.app.DatePickerDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;

import com.afcarrasquilla.mygamelist.R;
import com.afcarrasquilla.mygamelist.interfaces.FormularioInterface;
import com.afcarrasquilla.mygamelist.models.Juego;
import com.afcarrasquilla.mygamelist.presenters.FormularioPresenter;
import com.afcarrasquilla.mygamelist.utilities.ImageGalleryDemoActivity;
import com.afcarrasquilla.mygamelist.utilities.PickersActivity;
import com.google.android.material.textfield.TextInputLayout;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.app.ActivityCompat;

import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.Spinner;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;


public class FormularioActivity extends AppCompatActivity implements FormularioInterface.View {

    String TAG = "MyGameList/FormularioActivity";
    private FormularioInterface.Presenter presenter;

    //public ImageGalleryDemoActivity galleryDemoActivity;
    public static final String DEFAULT_OPTION_SPINNER = "Elige plataforma...";
    public static final int SELECT_FILE = 1;

    private ImageButton bfecha;
    private Button guardar;
    private Button borrar;
    private ImageButton bImagen;
    private Button addPlatform;
    private Context myContext;
    private TextInputLayout myName;
    private TextInputLayout myCompany;
    private TextInputLayout myHours;
    private TextInputLayout myDate;
    private Spinner mySpinner;
    private Switch myProperty;
    private Juego juego = null;
    private String conf;


    final private int CODE_WRITE_EXTERNAL_STORAGE_PERMISSION = 123;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_formulario);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        myContext = this;

        presenter = new FormularioPresenter(this);

        final int id = getIntent().getIntExtra("id",0);
        conf = getIntent().getStringExtra("config");
        juego = presenter.getGame(id);

        //Configuración de los campos
        myName = (TextInputLayout) findViewById(R.id.textInputNombre);
        myCompany = (TextInputLayout) findViewById(R.id.textInputCompany);
        myHours = (TextInputLayout) findViewById(R.id.textInputHoras);
        myDate = (TextInputLayout) findViewById(R.id.textInputFecha);
        mySpinner = (Spinner)findViewById(R.id.spinnerPlataforma);
        myProperty = (Switch) findViewById(R.id.switch2);

        //Configuración de botones
        bImagen = (ImageButton) findViewById(R.id.imageButtonJuego);
        bfecha = (ImageButton) findViewById(R.id.fechaButton) ;
        addPlatform = (Button) findViewById(R.id.plusButton);
        guardar =(Button)findViewById(R.id.saveButton);
        borrar =(Button)findViewById(R.id.botonBorrar);


        //Botón para el datepicker
        bfecha.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
               presenter.showDatePickerDialog();
            }
        });

        //botón para añadir plataforma
        addPlatform.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                presenter.onClickAddPlatform();
            }
        });


        //Configuración del formulario según editar o crear nuevo
        if (conf.equals("modify")){
            presenter.setTitle("Editar Juego");
            guardar.setText("Modificar");
            mySpinner.setAdapter(presenter.getSpinnerOptions(myContext,presenter.getAllPlatforms()));
            myName.getEditText().setText(juego.getName());
            myCompany.getEditText().setText(juego.getCompany());
            myHours.getEditText().setText(String.valueOf(juego.getHours()));
            myDate.getEditText().setText(juego.getDate());
            int pos = obtenerPosicionItem(mySpinner,juego.getPlatform());
            mySpinner.setSelection(pos);
            myProperty.setChecked(juego.isProperty());
            if (juego.getImage()!=null){
                bImagen.setImageBitmap(presenter.decodeImage(juego.getImage()));
            }
        }
        if (conf.equals("new")){
            presenter.setTitle("Nuevo Juego");
            ArrayList<String> options = presenter.getAllPlatforms();
            options.add(0,DEFAULT_OPTION_SPINNER);
            mySpinner.setAdapter(
                    presenter.getSpinnerOptions(
                            myContext,
                            options));
            guardar.setText("Guardar");
            borrar.setVisibility(View.INVISIBLE);
        }

        //botón guardar
        guardar.setOnClickListener(new View.OnClickListener() {
               @Override
               public void onClick(View v) {
                   Juego juego = new Juego();
                   if (validations(juego)){
                       if (conf.equals("new")) {
                           presenter.onClickSaveButton(juego);
                       } else if (conf.equals("modify")) {
                           juego.setId(id);
                           presenter.updateGame(juego);
                       }
                   }
               }
           });

        //botón borrar
        borrar.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                presenter.showAlertDialog();
            }
        });

        bImagen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                presenter.onClickImage(myContext);
            }
        });

        Log.d(TAG, "Estructura completada");
    }

    private boolean validations(Juego juego) {
        int errors = 0;
        if (juego.setName(myName.getEditText().getText().toString())) {
            presenter.hideError(myName);
        } else {
            presenter.showNameError();
            errors=+1;
        }
        if (juego.setCompany(myCompany.getEditText().getText().toString())) {
            presenter.hideError(myCompany);
        } else {
            presenter.showCompanyError();
            errors=+1;
        }
        if (myHours.getEditText().getText().toString().equals("")) {
            presenter.showHoursError();
            errors=+1;
        } else {
            if (juego.setHours(Integer.parseInt(
                    myHours.getEditText().getText().toString()))) {
                presenter.hideError(myHours);
            } else {
                presenter.showHoursError();
                errors=+1;
            }
        }
        if (juego.setDate(myDate.getEditText().getText().toString())) {
            presenter.hideError(myDate);
        } else {
            presenter.showDateError();
            errors=+1;
        }
        if (juego.setPlatform(mySpinner.getSelectedItem().toString())) {
            presenter.hideErrorPlatform();
        } else {
            presenter.showPlatformError();
            errors=+1;
        }
        juego.setProperty(myProperty.isChecked());
        if (errors == 0){
            return true;
        }else{
            return false;
        }
    }

    @Override
    public void setTitle(String title){
        getSupportActionBar().setTitle(title);
    }

    @Override
    public void showDatePickerDialog(){
        PickersActivity newFragment = PickersActivity.newInstance(new DatePickerDialog.OnDateSetListener() {
            @Override
            public void onDateSet(DatePicker datePicker, int year, int month, int day) {
                // +1 porque Enero es 0
                final String selectedDate = day + "/" + (month+1) + "/" + year;
                myDate.getEditText().setText(selectedDate);
            }
        });

        newFragment.show(getSupportFragmentManager(), "datePicker");
    }

    @Override
    public void showAlertDialog(){
        Dialog dialog = null;
        AlertDialog.Builder builder = new AlertDialog.Builder(myContext);
        builder.setMessage(
                "Eliminar juego")
                .setIcon(android.R.drawable.ic_dialog_alert)
                .setCancelable(false)
                .setPositiveButton("OK",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog,
                                                int id) {
                                presenter.onClickDeleteButton(juego.getId());
                                presenter.presentToast(myContext,"Juego eliminado con exito",
                                        Toast.LENGTH_SHORT);
                                finish();
                            }
                        })
                .setNegativeButton("CANCEL",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog,
                                                int id) {
                                dialog.cancel();
                            }
                        });
        AlertDialog alert = builder.create();
        dialog = alert;
        dialog.show();
    }

    @Override
    public void showNameError(){
        String name = myName.getEditText().getText().toString();
        if (name.equals("")){
            myName.setError(presenter.errorCampoVacio());
        }else if(name.length() > 100 || name.length() < 3){
            myName.setError("Introduzca un nombre entre 3 y 100 caráteres");
        }else if(name.toLowerCase().equals("fuck")){
            myName.setError("Nombre inapropiado");
        }else{
            myName.setError("Error en el nombre");
        }
    }

    @Override
    public void showCompanyError(){
        String company = myCompany.getEditText().getText().toString();
        if (company.equals("")){
            myCompany.setError(presenter.errorCampoVacio());
        }else if(company.length() > 100 || company.length() < 3){
            myCompany.setError("Introduzca un nombre entre 3 y 100 caráteres");
        }else{
            myCompany.setError("Error en la desarrolladora");
        }
    }

    @Override
    public void showHoursError(){
        myHours.setError("Introduzca un número entre "+Juego.MIN_HOURS+
                " y "+Juego.MAX_HOURS);
    }

    @Override
    public void showDateError(){
        String date = myDate.getEditText().getText().toString();
        if (date.equals("")){
            myDate.setError(presenter.errorCampoVacio());
        }else{
            myDate.setError("Formato no válido");
        }
    }

    @Override
    public void showPlatformError(){
        TextView tv = (TextView) findViewById(R.id.textViewPlataforma);
        String msg = " Debe elegir plataforma ";
        tv.setText(msg);
        tv.setTextColor(Color.RED);
    }

    @Override
    public void hideErrorPlatform(){
        TextView tv = (TextView) findViewById(R.id.textViewPlataforma);
        tv.setText(R.string.content_formulario_plataform);
        tv.setTextColor(Color.DKGRAY);
    }

    @Override
    public void requestPermission(){
        ActivityCompat.requestPermissions(
                FormularioActivity.this,
                new String[] {Manifest.permission.WRITE_EXTERNAL_STORAGE},
                CODE_WRITE_EXTERNAL_STORAGE_PERMISSION
        );
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode) {
            case CODE_WRITE_EXTERNAL_STORAGE_PERMISSION:
                presenter.resultPermission(grantResults[0]);
                break;
            default:
                super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }

    public void onClickAddPlatform(){
        final AlertDialog.Builder alertDialog = new AlertDialog.Builder(myContext);
        alertDialog.setTitle("Nueva Plataforma");
        alertDialog.setMessage("Añade una plataforma");

        final EditText input = new EditText(myContext);
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.MATCH_PARENT);
        input.setLayoutParams(lp);
        alertDialog.setView(input);
        alertDialog.setIcon(R.drawable.ic_shortcut_plataform_icon);

        alertDialog.setPositiveButton("OK",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        String plataforma = input.getText().toString();
                        if (juego.setPlatform(plataforma)) {
                            if (presenter.addPlatform(plataforma)){
                                presenter.presentToast(myContext, "Plataforma añadida" +
                                        " correctamente", Toast.LENGTH_SHORT);
                                mySpinner.setAdapter(
                                        presenter.getSpinnerOptions(
                                                myContext,
                                                presenter.getAllPlatforms()));
                                dialog.cancel();
                            }else{
                                presenter.presentToast(myContext, "No se pudo " +
                                        "añadir la plataforma", Toast.LENGTH_SHORT);
                            }
                        } else {
                            presenter.presentToast(myContext, "Nombre de " +
                                    "plataforma inapropiado", Toast.LENGTH_SHORT);
                        }
                    }

                });

        alertDialog.setNegativeButton("CANCEL",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                });

        alertDialog.show();
    }

    public static int obtenerPosicionItem(Spinner spinner, String fruta) {
        //Creamos la variable posicion y lo inicializamos en 0
        int posicion = 0;
        //Recorre el spinner en busca del ítem que coincida con el parametro `String fruta`
        //que lo pasaremos posteriormente
        for (int i = 0; i < spinner.getCount(); i++) {
            //Almacena la posición del ítem que coincida con la búsqueda
            if (spinner.getItemAtPosition(i).toString().equalsIgnoreCase(fruta)) {
                posicion = i;
            }
        }
        //Devuelve un valor entero (si encontro una coincidencia devuelve la
        // posición 0 o N, de lo contrario devuelve 0 = posición inicial)
        return posicion;
    }

    @Override
    public void presentToastModify(){
        presenter.presentToast(myContext,"Juego modificado con exito", Toast.LENGTH_SHORT);
    }

    @Override
    public void presentToastErrorModify() {
        presenter.presentToast(myContext,"El juego no se pudo editar", Toast.LENGTH_SHORT);
    }

    @Override
    public void presentToastErrorAdd() {
        presenter.presentToast(myContext,"El juego no se pudo crear", Toast.LENGTH_SHORT);
    }

    @Override
    public void launchGallery() {
        Intent intent = new Intent(
                FormularioActivity.this,
                ImageGalleryDemoActivity.class);
        intent.setType("image/*");
        intent.setAction(Intent.ACTION_GET_CONTENT);
        startActivityForResult(
                Intent.createChooser(intent, "Seleccione una imagen"),
                SELECT_FILE);
    }

    @Override
    public void finish(){
        super.finish();
    }

    @Override
    public void showErrorPermission(String msg) {
        presenter.presentToast(myContext,msg,Toast.LENGTH_LONG);
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
