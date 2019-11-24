package com.afcarrasquilla.mygamelist.interfaces;

public interface FormularioInterface {

    public interface View{
        void lanzarError();
    }

    public interface Presenter{
        void onFocusChange(View v, boolean hasFocus);
    }
}
