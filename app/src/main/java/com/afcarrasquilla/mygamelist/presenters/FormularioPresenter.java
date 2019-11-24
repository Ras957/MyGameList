package com.afcarrasquilla.mygamelist.presenters;

import android.view.View;

import com.afcarrasquilla.mygamelist.interfaces.FormularioInterface;

public class FormularioPresenter implements FormularioInterface{
    private FormularioInterface.View view;

    public FormularioPresenter(FormularioInterface.View view){this.view = view;}

    public void onFocusChange(View v, boolean hasFocus){
        view.lanzarError();
    }
}
