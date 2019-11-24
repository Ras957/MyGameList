package com.afcarrasquilla.mygamelist.interfaces;

public interface ListadoInterface {
    public interface View{
        void lanzarFormulario();
        void lanzarBuscado();
    }

    public interface Presenter{
        void OnClickAdd();
        void OnClickSearch();
    }
}
