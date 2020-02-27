package com.afcarrasquilla.mygamelist.presenters;

import com.afcarrasquilla.mygamelist.interfaces.BuscarInterface;

public class BuscarPresenter implements BuscarInterface.Presenter {

    private BuscarInterface.View view;

    public BuscarPresenter (BuscarInterface.View view){
        this.view = view;
    }

    @Override
    public void onClickSearch(String[] datos){
        view.search(datos);

    }
}
