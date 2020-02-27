package com.afcarrasquilla.mygamelist.interfaces;


import android.content.Context;
import android.graphics.Bitmap;
import android.widget.ArrayAdapter;

import com.afcarrasquilla.mygamelist.models.Juego;
import com.google.android.material.textfield.TextInputLayout;

import java.util.ArrayList;

public interface FormularioInterface {

    public interface View{
        void requestPermission();
        void launchGallery();
        void showErrorPermission(String msg);
        void setTitle(String title);
        void showDatePickerDialog();
        void showAlertDialog();
        void finish();
        void showNameError();
        void showCompanyError();
        void showHoursError();
        void showDateError();
        void showPlatformError();
        void hideErrorPlatform();
        void presentToastModify();
        void presentToastErrorModify();
        void presentToastErrorAdd();
        void onClickAddPlatform();
    }

    public interface Presenter{
        void setTitle(String title);
        void showDatePickerDialog();
        void showAlertDialog();
        String errorCampoVacio();
        void onClickImage(Context myContest);
        void resultPermission(int result);
        void onClickSaveButton(Juego newJuego);
        Bitmap decodeImage(String image);
        Juego getGame(int id);
        void showNameError();
        void showCompanyError();
        void showHoursError();
        void showDateError();
        void showPlatformError();
        void hideError(TextInputLayout tiet);
        void hideErrorPlatform();
        void onClickDeleteButton(int id);
        void updateGame(Juego juego);
        void presentToast(Context context, String msg, int dur);
        void onClickAddPlatform();
        boolean addPlatform(String plat);
        ArrayList<String> getAllPlatforms();
        ArrayAdapter<String> getSpinnerOptions(Context context, ArrayList<String> options);
    }
}
