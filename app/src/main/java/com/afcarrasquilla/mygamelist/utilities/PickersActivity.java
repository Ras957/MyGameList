package com.afcarrasquilla.mygamelist.utilities;

import android.app.DatePickerDialog;
import android.os.Bundle;
import android.view.View;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ImageButton;

import androidx.appcompat.app.AppCompatActivity;

import com.afcarrasquilla.mygamelist.R;

import java.util.Calendar;

public class PickersActivity extends AppCompatActivity {
    private static final String CERO = "0";
    private static final String BARRA = "/";

    //Calendario para obtener fecha & hora
    public final Calendar c = Calendar.getInstance();

    //Variables para obtener la fecha
    final int mes = c.get(Calendar.MONTH);
    final int dia = c.get(Calendar.DAY_OF_MONTH);
    final int anio = c.get(Calendar.YEAR);

    //Widgets
    private int id;
    private EditText etFecha;
    private ImageButton ibObtenerFecha;

    public PickersActivity(int id, EditText etFecham, ImageButton ibObtenerFecha){
        this.id = id;
        this.etFecha = etFecham;
        this.ibObtenerFecha = ibObtenerFecha;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(this.id);
        //Widget EditText donde se mostrara la fecha obtenida
        //etFecha = (EditText) findViewById(R.id.editTextFecha);
        //Widget ImageButton del cual usaremos el evento clic para obtener la fecha
        //ibObtenerFecha = (ImageButton) findViewById(R.id.fechaButtom);
        //Evento setOnClickListener - clic
        this.ibObtenerFecha.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                obtenerFecha();
            }
        });

    }


    private void obtenerFecha(){
        DatePickerDialog recogerFecha = new DatePickerDialog(this, new DatePickerDialog.OnDateSetListener() {
            @Override
            public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                //Esta variable lo que realiza es aumentar en uno el mes ya que comienza desde 0 = enero
                final int mesActual = month + 1;
                //Formateo el día obtenido: antepone el 0 si son menores de 10
                String diaFormateado = (dayOfMonth < 10)? CERO + String.valueOf(dayOfMonth):String.valueOf(dayOfMonth);
                //Formateo el mes obtenido: antepone el 0 si son menores de 10
                String mesFormateado = (mesActual < 10)? CERO + String.valueOf(mesActual):String.valueOf(mesActual);
                //Muestro la fecha con el formato deseado
                etFecha.setText(diaFormateado + BARRA + mesFormateado + BARRA + year);


            }
            //Estos valores deben ir en ese orden, de lo contrario no mostrara la fecha actual
            /**
             *También puede cargar los valores que usted desee
             */
        },anio, mes, dia);
        //Muestro el widget
        recogerFecha.show();

    }
}
