package com.afcarrasquilla.mygamelist.presenters;

import com.afcarrasquilla.mygamelist.interfaces.ListadoInterface;

public class ListadoPresenter implements ListadoInterface.Presenter{
    private ListadoInterface.View view;

    public ListadoPresenter(ListadoInterface.View view){
        this.view = view;
    }

    @Override
    public void OnClickAdd(){
        view.lanzarFormulario();
    }

    public void OnClickSearch(){ view.lanzarBuscado();}
}



