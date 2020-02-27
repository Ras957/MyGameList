package com.afcarrasquilla.mygamelist.presenters;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;
import android.util.Log;
import android.widget.ArrayAdapter;
import android.widget.Toast;

import androidx.annotation.ColorInt;
import androidx.core.content.ContextCompat;

import com.afcarrasquilla.mygamelist.interfaces.FormularioInterface;
import com.afcarrasquilla.mygamelist.models.Juego;
import com.afcarrasquilla.mygamelist.models.JuegoModelo;
import com.google.android.material.textfield.TextInputLayout;

import java.util.ArrayList;

public class FormularioPresenter implements FormularioInterface.Presenter{

    private FormularioInterface.View view;
    private JuegoModelo model;

    public FormularioPresenter(FormularioInterface.View view){
        this.view = view;
        this.model = JuegoModelo.getInstance();
    }

    @Override
    public void setTitle (String title){
        view.setTitle(title);
    }

    @Override
    public void showDatePickerDialog(){ view.showDatePickerDialog(); }

    @Override
    public void showAlertDialog(){ view. showAlertDialog(); }

    @Override
    public Juego getGame(int id){
        return model.getGame(id);
    }

    @Override
    public void updateGame(Juego juego){
        if (model.modifyGame(juego)){
            view.presentToastModify();
            view.finish();
        }else{
            view.presentToastErrorModify();
        }

    }

    @Override
    public void presentToast(Context context, String msg, int dur){
        Toast toast =
        Toast.makeText(context,msg,dur);
        toast.show();
    }

    @Override
    public ArrayList<String> getAllPlatforms(){
        return model.getAllPlatforms();
    }

    @Override
    public ArrayAdapter<String> getSpinnerOptions(Context context, ArrayList<String> options){
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(
                context,
                android.R.layout.simple_spinner_item,
                options);
        return adapter;
    }

    @Override
    public void onClickAddPlatform(){
        view.onClickAddPlatform();
    }

    @Override
    public boolean addPlatform(String plat){
        return model.addPlatform(plat);
    }

    @Override
    public String errorCampoVacio() {
        return "Rellene este campo";
    }

    @Override
    public void showNameError(){
        view.showNameError();
    }

    @Override
    public void showCompanyError(){
        view.showCompanyError();
    }

    @Override
    public void showHoursError(){
        view.showHoursError();
    }

    @Override
    public void showDateError(){
        view.showDateError();
    }

    @Override
    public void showPlatformError(){
        view.showPlatformError();
    }

    @Override
    public void hideError(TextInputLayout tiet){
        if (tiet.isErrorEnabled()){
            tiet.setErrorEnabled(false);
        }
    }

    @Override
    public void hideErrorPlatform(){
        view.hideErrorPlatform();
    }

    @Override
    public Bitmap decodeImage(String image){
        byte[] decodedString = Base64.decode(image, Base64.DEFAULT);
        Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString,0,decodedString.length);
        return decodedByte;
    }

    @Override
    public void onClickImage(Context myContext) {
        int readPermission = ContextCompat.checkSelfPermission(
                myContext,
                Manifest.permission.READ_EXTERNAL_STORAGE
        );
        Log.d("MyGameList", "Permisos: " + readPermission);

        if (readPermission != PackageManager.PERMISSION_GRANTED){
            view.requestPermission();
        }else{
            view.launchGallery();
        }
    }

    @Override
    public void resultPermission(int result) {
        if (result == PackageManager.PERMISSION_GRANTED) {
            // Permiso aceptado
            Log.d("MyGameList", "Permiso aceptado");
            view.launchGallery();
        } else {
            // Permiso rechazado
            Log.d("MyGameList", "Permiso denegado");
            view.showErrorPermission("Sin permisos no puedes entrar");
        }
    }

    @Override
    public void onClickSaveButton(Juego juego) {
        if (model.addNew(juego)){
            view.finish();
        }else{
            view.presentToastErrorAdd();
        }
    }

    @Override
    public void onClickDeleteButton(int id){
        model.deleteGame(id);
    }
}
