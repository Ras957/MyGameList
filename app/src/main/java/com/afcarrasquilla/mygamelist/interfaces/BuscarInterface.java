package com.afcarrasquilla.mygamelist.interfaces;

public interface BuscarInterface {

    public interface View{
        void search(String [] datos);
    }

    public interface Presenter{
        void onClickSearch(String [] datos);
    }
}
